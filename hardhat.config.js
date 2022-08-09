require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  mocha: {
    reporter:"json"
   },
  networks:{
     hardhat : {

     }
  }
};
