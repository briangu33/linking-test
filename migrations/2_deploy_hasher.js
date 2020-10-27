const mimcGenContract = require("../build/contracts/mimcsponge_gencontract.js");
const CircomLib = artifacts.require("CircomLib");
const Hasher = artifacts.require("Hasher");

module.exports = async function(deployer) {
  const SEED = "mimcsponge";
  CircomLib.abi = mimcGenContract.abi;
  CircomLib.bytecode = mimcGenContract.createCode(SEED, 220);

  deployer.deploy(CircomLib);
  deployer.link(CircomLib, Hasher);
  deployer.deploy(Hasher);
};
