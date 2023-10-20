import { createContext, useContext } from "react";
import { ethers } from "ethers";

interface IEthereumContext {
  signer: ethers.Signer | null;
}

// Create context with default values.
export const EthereumContext = createContext<IEthereumContext>({
  signer: null,
});

export const useEthereum = () => useContext(EthereumContext);
