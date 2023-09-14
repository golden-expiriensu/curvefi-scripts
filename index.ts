import { constructDepositCommand, constructWithdrawCommand } from './scripts';

const e6 = 1000000n;
const e18 = e6 * e6 * e6;

async function main(): Promise<void> {
    console.log('3pool');
    console.log(
        await constructDepositCommand('3pool (DAI/USDC/USDT)', {
            DAI: 1000n * e18,
            USDC: 1000n * e6,
            USDT: 1000n * e6,
        }),
    );
    console.log(await constructWithdrawCommand('3pool (DAI/USDC/USDT)', 2500n * e18));

    console.log('\nstETH');
    console.log(
        await constructDepositCommand('steth (ETH/stETH)', {
            ETH: 5n * e18,
            stETH: 5n * e18,
        }),
    );
    console.log(await constructWithdrawCommand('steth (ETH/stETH)', 9n * e18));
}

main();
