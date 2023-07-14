const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const PaymentContract = await hre.ethers.getContractFactory("PaymentContract");

  // Deploy the contract
  const paymentContract = await PaymentContract.deploy({ value: hre.ethers.parseEther("1") });

  // Wait for the contract to be mined
  await paymentContract.waitForDeployment();

  //console.log("PaymentContract deployed to:", paymentContract.address);
}

// Execute the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //0xe7f1725e7734ce288f8367e1bb143e90bb3f0512