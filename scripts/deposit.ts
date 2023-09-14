import { Pool, Token, pools } from './config';
import CurveFiPool from './abi/CurveFiPool.json';
import { ethers } from 'ethers';

const constructDepositSignature = (numberOfCoins: number) => {
    if (![2, 3].includes(numberOfCoins)) {
        throw new Error(`Unsupported number of coins: ${numberOfCoins}`);
    }
    return `add_liquidity(uint256[${numberOfCoins}],uint256)`;
};

export async function constructDepositCommand(
    pool: Pool,
    tokensToDeposit: Partial<Record<Token, bigint>>,
): Promise<{
    target: string;
    value: bigint;
    payload: string;
}> {
    const numberOfCoins = Object.keys(tokensToDeposit).length;
    const minAmountOut = 0;

    const contract = new ethers.Contract(pools[pool].pool, CurveFiPool);

    const value = Object.entries(tokensToDeposit).reduce(
        (value, [token, amount]) => (token === 'ETH' ? value + amount : value),
        0n,
    );
    const payload = contract.interface.encodeFunctionData(
        constructDepositSignature(numberOfCoins),
        [Object.values(tokensToDeposit), minAmountOut],
    );

    return {
        target: await contract.getAddress(),
        value,
        payload,
    };
}
