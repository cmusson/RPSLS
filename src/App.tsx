import { useState, useEffect } from "react";
import { useEthereum } from "./context/EthereumContext";

export default function App() {
  const { signer } = useEthereum();
  // add useState connected and setConnected to Ethereum global context
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    if (!signer) {
      console.log("No wallet available. You need to install MetaMask!");
      return;
    }
    try {
      //disable the 'Connect Wallet' button while the request is pending!
      await (window as Window).ethereum.request({
        method: "eth_requestAccounts",
      });
      setConnected(true);
    } catch (error) {
      console.error(error);
      setConnected(false);
    }
  };

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (!signer) return;
      try {
        // Get accounts
        const accounts = await (window as Window).ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setConnected(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkIfWalletIsConnected();
  }, [signer]);

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-3xl font-bold underline">
        Rock Paper Scissors Lizard Spock
      </h1>
      {connected ? (
        <></>
      ) : (
        <button onClick={connectWallet} disabled={connected}>
          Connect Wallet
        </button>
      )}
      <h3>
        {connected
          ? "Wallet Connected!"
          : "Press button to connect your wallet"}
      </h3>
    </main>
  );
}
