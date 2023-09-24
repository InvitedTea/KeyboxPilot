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
  Linea: {
    label: "Linea Mainnet",
    url: "https://api.lineascan.build/",
    apiKey: process.env.APIKEY_lineascan as string,
    endpoint: (contractAddress: string) =>
      `https://api.lineascan.build/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_lineascan}`,
  },
  Gnosisscan: {
    label: "Gnosis Mainnet",
    url: "https://api.gnosisscan.io/",
    apiKey: process.env.APIKEY_GSCAN as string,
    endpoint: (contractAddress: string) =>
      `https://api.gnosisscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_GSCAN}`,
  },
  scrolltest: {
    label: "Scroll Testnet",
    url: "https://api-sepolia.scrollscan.dev",
    apiKey: process.env.APIKEY_ETHERSCAN as string,
    endpoint: (contractAddress: string) =>
      `https://api-sepolia.scrollscan.dev/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_ETHERSCAN}`,
  },
  Startnet: {
    label: "Starknet Mainnet",
    url: "https://api.starkscan.co",
    apiKey: process.env.APIKEY_STARKSCAN as string,
    endpoint: (contractAddress: string) =>
      `https://api.starkscan.co/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_STARKSCAN}`,
  },
  XDCNetwork : {
    label: "XDC Network Mainnet",
    url: "https://xdc.blocksscan.io",
    apiKey: process.env.APIKEY_XDCSCAN as string,
    endpoint: (contractAddress: string) =>
      `https://xdc.blocksscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_XDCSCAN}`,
  },
  mantleNetwork : {
    label: "Mantle Mainnet",
    url: "https://mantlescan.info",
    apiKey: process.env.APIKEY_MAnTLESCAN as string,
    endpoint: (contractAddress: string) =>
      `https://mantlescan.info/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_MAnTLESCAN}`,
  },
  goerli: {
    label: "ETH Goerli Testnet",
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
  "arbitrum Mainnet": {
    label: "Arbitrum Mainnet",
    url: "https://arbiscan.io",
    apiKey: process.env.APIKEY_BSCSCAN as string,
    endpoint: (contractAddress: string) =>
      `https://api.arbiscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_BSCSCAN}`,
  },
  "arbitrum goerli": {
    label: "Arbitrum Goerli Testnet",
    url: "https://goerli.arbiscan.io",
    apiKey: process.env.APIKEY_ARBITRUMSCAN as string,
    endpoint: (contractAddress: string) =>
      `https://api-goerli.arbiscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.APIKEY_ARBITRUMSCAN}`,
  },

};
