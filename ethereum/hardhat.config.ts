import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: { compilers: [{ version: "0.4.26" }] },
};

//  original solidity version, update .sol file if all is working with this version later
//  solidity: "0.8.19",

export default config;
