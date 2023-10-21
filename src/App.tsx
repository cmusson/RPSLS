import { useEffect } from "react";
import { useEthereum } from "./context/EthereumContext";

export default function App() {
  const { connected, setConnected } = useEthereum();

  const connectWallet = async () => {
    if (!window.ethereum) {
      console.log("No wallet available. You need to install MetaMask!");
      return;
    }

    try {
      // Request accounts access
      await window.ethereum.request({ method: "eth_requestAccounts" });
      setConnected(true);
    } catch (error) {
      console.error(error);
      setConnected(false);
    }
  };

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (!window.ethereum) return;

      try {
        const accounts = await window.ethereum.request({
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
  }, []);

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-3xl font-bold underline">
        Rock Paper Scissors Lizard Spock
      </h1>
      {connected ? (
        <span>Wallet Connected!</span>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
      <h3>
        {connected
          ? "You can start playing now!"
          : "Connect your wallet to start playing"}
      </h3>
    </main>
  );
}
