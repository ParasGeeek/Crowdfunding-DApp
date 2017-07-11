var StarkyDAO = artifacts.require("./StarkyDAO.sol");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(StarkyDAO, accounts[0], 50, 1, 10000, 7 * 24 * 60 * 60, 100);
};
