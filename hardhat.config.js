require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const INFURA_API_KEY = fs.readFileSync(".infuraid").toString().trim() || "";
const PRIVATE_KEY = fs.readFileSync(".privatekey").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },

    mumbai: {
      // Infura
      url: `https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}`,
      // url: "https://rpc-mumbai.matic.today",
      accounts: [PRIVATE_KEY],
    },
    // matic: {
    // Infura
    // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
    //   url: "https://rpc-mainnet.maticvigil.com",
    //   accounts: [process.env.privateKey],
    // },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
