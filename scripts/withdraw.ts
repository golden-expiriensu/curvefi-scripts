import { Pool, dropdownOptions, pools } from './config';
import CurveFiPool from './abi/CurveFiPool.json';
import { ethers } from 'ethers';

const constructWithdrawSignature = (numberOfCoins: number) => {
    if (![2, 3].includes(numberOfCoins)) {
        throw new Error(`Unsupported number of coins: ${numberOfCoins}`);
    }
    return `remove_liquidity(uint256,uint256[${numberOfCoins}])`;
};

export async function constructWithdrawData(pool: Pool, amount: bigint): Promise<string> {
    const option = dropdownOptions.find((e) => e.title === pool);
    if (!option) {
        throw new Error(`Unsupported pool: ${pool}`);
    }
    const numberOfCoins = option.inputs.length;
    const minOutput = numberOfCoins === 2 ? [0, 0] : [0, 0, 0];

    const contract = new ethers.Contract(pools[pool].pool, CurveFiPool);
    return contract.interface.encodeFunctionData(constructWithdrawSignature(numberOfCoins), [
        amount,
        minOutput,
    ]);
}
