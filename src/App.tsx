import { useState } from "react";

export default function App() {
  const [connected, setConnected] = useState(false);
  // Sepolia for app development/testing

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-3xl font-bold underline">
        Rock Paper Scissors Lizard Spock
      </h1>
      <button>Connect Wallet</button>
      <h3>
        {connected
          ? "Wallet Connected!"
          : "Press button to connect your wallet"}
      </h3>
    </main>
  );
}
