import { constructDepositData, constructWithdrawData } from './scripts';

const e6 = 1000000n;
const e18 = e6 * e6 * e6;

async function main(): Promise<void> {
    console.log(
        await constructDepositData('3pool (DAI/USDC/USDT)', {
            DAI: 1000n * e18,
            USDC: 1000n * e6,
            USDT: 1000n * e6,
        }),
    );

    console.log(await constructWithdrawData('3pool (DAI/USDC/USDT)', 2500n * e18));
}

main();
