export const pools = {
  "3pool (DAI/USDC/USDT)": {
    pool: "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
    lpt: "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
  },
  "frax (FRAX/3pool)": {
    pool: "0xd632f22692fac7611d2aa1c0d552930d43caed3b",
    lpt: "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
  },
  "frax_usdc (FRAX/USDC)": {
    pool: "0xdcef968d416a41cdac0ed8702fac8128a64241a2",
    lpt: "0x3175Df0976dFA876431C2E9eE6Bc45b65d3473CC",
  },
  "steth (ETH/stETH)": {
    pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022",
    lpt: "0x06325440D014e39736583c165C2963BA99fAf14E",
  },
  "tricrypto (USDT/WBTC/WETH)": {
    pool: "0xD51a44d3FaE010294C616388b506AcdA1bfAAE46",
    lpt: "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff",
  },
};
export const tokens = {
  DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  ETH: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  stETH: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
  WBTC: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  FRAX: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
  "3Crv": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
};

export const dropdownOptions: Array<{
  title: keyof typeof pools;
  inputs: Array<keyof typeof tokens>;
}> = [
  {
    title: "3pool (DAI/USDC/USDT)",
    inputs: ["DAI", "USDC", "USDT"],
  },
  {
    title: "frax (FRAX/3pool)",
    inputs: ["FRAX", "3Crv"],
  },
  {
    title: "frax_usdc (FRAX/USDC)",
    inputs: ["FRAX", "USDC"],
  },
  {
    title: "steth (ETH/stETH)",
    inputs: ["ETH", "stETH"],
  },
  {
    title: "tricrypto (USDT/WBTC/WETH)",
    inputs: ["USDT", "WBTC", "WETH"],
  },
];
