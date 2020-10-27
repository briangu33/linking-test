const ganache = require("ganache-cli");
const Web3 = require("web3");
const mimcGenContract = require("./mimcsponge_gencontract.js");
const hasherContract = require("../build/contracts/Hasher.json");
const Hasher = artifacts.require("Hasher");

async function main() {
  // web3 = new Web3(ganache.provider(), null, {
  //   transactionConfirmationBlocks: 1
  // });
  // accounts = await web3.eth.getAccounts();

  // const SEED = "mimcsponge";
  // const C = new web3.eth.Contract(mimcGenContract.abi);
  // mimc = await C.deploy({
  //   data: mimcGenContract.createCode(SEED, 220)
  // }).send({
  //   gas: 3500000,
  //   from: accounts[0]
  // });
  // console.log("MiMC deployed to:", mimc.options.address);

  // const H = new web3.eth.Contract(hasherContract.abi);
  // hasher = await H.deploy({
  //   data: hasherContract.bytecode
  // }).send({
  //   gas: 3500000,
  //   from: accounts[0]
  // });
  // console.log("Hasher deployed to:", hasher.options.address);
  console.log(Hasher);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
