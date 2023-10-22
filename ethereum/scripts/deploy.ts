import { ethers } from "hardhat";

async function main() {
  const j2Address: string = process.argv[2]; // 2nd players address
  const c1Hash: string = process.argv[3]; // first players move

  // Get the contract to deploy
  const RPS = await ethers.getContractFactory("RPS");
  const rps = await RPS.deploy(c1Hash, j2Address);

  await rps.deployed();

  console.log("RPS deployed to:", rps.address);
}

main()
  .then(() => process.exit(0))
  .catch((error: error) => {
    console.error("Error:", error);
    process.exit(1);
  });
