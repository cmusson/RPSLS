import { createContext, useContext } from "react";
import { ethers } from "ethers";

interface IEthereumContext {
  signer: ethers.Signer | null;
  connected: boolean;
  setConnected: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EthereumContext = createContext<IEthereumContext>({
  signer: null,
  connected: false,
  setConnected: () => {},
});

export const useEthereum = () => useContext(EthereumContext);
