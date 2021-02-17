require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider')
mnemonic = ""

module.exports = {

  networks: {

    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },

    kovan: {
      provider: () => {
          return new HDWalletProvider(mnemonic, "Your Infura endpoint for Kovan")// Url to an Ethereum Node
      },

      gas: 5000000,
      gasPrice: 25000000000,
      network_id: '42'
    }

  },
  contracts_directory: './src/contracts/', 
  contracts_build_directory: './src/abis/',

  // Configure your compilers
  compilers: {
    solc: {
        // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
      
    }
  }
}
