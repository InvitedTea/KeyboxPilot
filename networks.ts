import { NetworksObject } from "./types";

export const NETWORKS: NetworksObject = {
  ethmain: {
    label: "Ethereum Mainnet",
    url: "https://etherscan.io",
    apiKey: process.env.APIKEY_ETHERSCAN as string,
    endpoint: (contractAddress: string) =>
      `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_ETHERSCAN}`,
  },
  basemain: {
    label: "Base Mainnet",
    url: "https://api.basescan.org/",
    apiKey: process.env.APIKEY_BASESCAN as string,
    endpoint: (contractAddress: string) =>
      `https://api.basescan.org/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_BASESCAN}`,
  },
  goerli: {
    label: "Goerli Testnet",
    url: "https://goerli.etherscan.io",
    apiKey: process.env.APIKEY_ETHERSCAN as string,
    endpoint: (contractAddress: string) =>
      `https://api-goerli.etherscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_ETHERSCAN}`,
  },
  polygon: {
    label: "Polygon Mainnet",
    url: "https://polygonscan.com",
    apiKey: process.env.APIKEY_POLYGONSCAN as string,
    endpoint: (contractAddress: string) =>
      `https://api.polygonscan.com/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_POLYGONSCAN}`,
  },
  polygonTest: {
    label: "Polygon Mumbai Testnet",
    url: "https://mumbai.polygonscan.com",
    apiKey: process.env.APIKEY_POLYGONSCAN as string,
    endpoint: (contractAddress: string) =>
      `https://api-testnet.polygonscan.com/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_POLYGONSCAN}`,
  },
  "arbitrum one": {
    label: "Arbitrum One Mainnet",
    url: "https://arbiscan.io",
    apiKey: process.env.APIKEY_BSCSCAN as string,
    endpoint: (contractAddress: string) =>
      `https://api.arbiscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_BSCSCAN}`,
  },
  "arbitrum nova": {
    label: "Arbitrum Nova Mainnet",
    url: "https://nova.arbiscan.io",
    apiKey: process.env.APIKEY_ARBITRUMSCAN as string,
    endpoint: (contractAddress: string) =>
      `https://api-nova.arbiscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_ARBITRUMSCAN}`,
  },
  "arbitrum goerli": {
    label: "Arbitrum Goerli Testnet",
    url: "https://goerli.arbiscan.io",
    apiKey: process.env.APIKEY_ARBITRUMSCAN as string,
    endpoint: (contractAddress: string) =>
      `https://api-goerli.arbiscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_ARBITRUMSCAN}`,
  },
};
