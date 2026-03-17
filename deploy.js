const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Replace with actual token addresses
  const STAKING_TOKEN = "0x..."; 
  const REWARD_TOKEN = "0x...";

  const Vault = await hre.ethers.getContractFactory("StakingVault");
  const vault = await Vault.deploy(STAKING_TOKEN, REWARD_TOKEN);

  await vault.waitForDeployment();
  console.log("StakingVault deployed to:", await vault.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
