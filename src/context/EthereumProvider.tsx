import { ReactNode, useEffect, useState } from "react";
import { BrowserProvider, Eip1193Provider, ethers } from "ethers";
import { EthereumContext } from "./EthereumContext";

declare global {
  interface Window {
    ethereum: Eip1193Provider & BrowserProvider;
  }
}

export const EthereumProvider = ({ children }: { children: ReactNode }) => {
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const initEthereum = async () => {
      let provider;
      if (typeof (window as Window).ethereum != "undefined") {
        // Ethereum user detected. You can now use the provider.
        provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        setSigner(signer);
      } else {
        console.log("MetaMask not installed; using read-only defaults");
        provider = ethers.getDefaultProvider("sepolia");
      }
    };
    initEthereum();
  }, []);

  return (
    <EthereumContext.Provider value={{ signer, connected, setConnected }}>
      {children}
    </EthereumContext.Provider>
  );
};
