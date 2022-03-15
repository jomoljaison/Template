const Migrations = artifacts.require("Migrations");
const Escrow = artifacts.require("Escrow");

buyer="";
seller="";

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Escrow,buyer,seller);
};


