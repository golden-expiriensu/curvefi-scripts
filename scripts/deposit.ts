import { Pool, Token, pools } from './config';
import CurveFiPool from './abi/CurveFiPool.json';
import { ethers } from 'ethers';

const constructDepositSignature = (numberOfCoins: number) => {
    if (![2, 3].includes(numberOfCoins)) {
        throw new Error(`Unsupported number of coins: ${numberOfCoins}`);
    }
    return `add_liquidity(uint256[${numberOfCoins}],uint256)`;
};

export async function constructDepositData(
    pool: Pool,
    tokensToDeposit: Partial<Record<Token, bigint>>,
): Promise<string> {
    const numberOfCoins = Object.keys(tokensToDeposit).length;
    const minAmountOut = 0;

    const contract = new ethers.Contract(pools[pool].pool, CurveFiPool);

    return contract.interface.encodeFunctionData(constructDepositSignature(numberOfCoins), [
        Object.values(tokensToDeposit),
        minAmountOut,
    ]);
}
