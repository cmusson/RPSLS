import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { EthereumProvider } from "./context/EthereumProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EthereumProvider>
      <App />
    </EthereumProvider>
  </React.StrictMode>
);
