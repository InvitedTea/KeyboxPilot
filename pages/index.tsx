import AppForm from "../components/AppForm";
import AppPreviewContract from "../components/AppPreviewContract";

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'

import { mainnet, arbitrum } from '@wagmi/core/chains'

// 1. Define constants
const projectId = '4b7579feb776892468127582e24c4d9c'

// 2. Create wagmiConfig
const chains = [mainnet, arbitrum, ]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, appName: 'Web3Modal' })

// 3. Create modal
const modal = createWeb3Modal({ wagmiConfig, projectId, chains })

export default function Home() {
  
  return (
    
    <div>



      <div className="mx-auto w-full max-w-md py-10">

      <w3m-button />
    <script type="module" src="main.js"></script>
        <AppForm />
      </div>
      <AppPreviewContract />

 
    </div>
  );
}
