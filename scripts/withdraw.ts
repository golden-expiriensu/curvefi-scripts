import { Pool, dropdownOptions, pools } from './config';
import CurveFiPool from './abi/CurveFiPool.json';
import { ethers } from 'ethers';

const constructWithdrawSignature = (numberOfCoins: number) => {
    if (![2, 3].includes(numberOfCoins)) {
        throw new Error(`Unsupported number of coins: ${numberOfCoins}`);
    }
    return `remove_liquidity(uint256,uint256[${numberOfCoins}])`;
};

export async function constructWithdrawCommand(
    pool: Pool,
    amount: bigint,
): Promise<{
    target: string;
    value: bigint;
    payload: string;
}> {
    const option = dropdownOptions.find((e) => e.title === pool);
    if (!option) {
        throw new Error(`Unsupported pool: ${pool}`);
    }
    const numberOfCoins = option.inputs.length;
    const minOutput = numberOfCoins === 2 ? [0, 0] : [0, 0, 0];

    const contract = new ethers.Contract(pools[pool].pool, CurveFiPool);

    const payload = contract.interface.encodeFunctionData(
        constructWithdrawSignature(numberOfCoins),
        [amount, minOutput],
    );

    return {
        target: await contract.getAddress(),
        value: 0n,
        payload,
    };
}
