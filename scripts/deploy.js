// imports the ethers module from the Hardhat library,
const { ethers } = require("hardhat");

async function main() {
  //retrieves the contract factory for the NFTMinter contract. This factory is used to create instances of the contract.
  const NFTMinter = await ethers.getContractFactory("NFTMinter");

  //deploys a new instance of the NFTMinter contract.
  const nftMinter = await NFTMinter.deploy();

  //waits for the deployment to complete and ensures that the contract is successfully deployed.
  await nftMinter.deployed();

  console.log("NFTMinter deployed to:", nftMinter.address);
}
// It handles the asynchronous execution of the function and handles any errors that may occur.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
