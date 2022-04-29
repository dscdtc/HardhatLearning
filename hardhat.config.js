require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4", //使用的sodity库的版本
  
  tenderly: {
      project: "project",
      username: "dscdtc",
  },

  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/" + process.env.INFURA_ID, //<---- YOUR INFURA ID! (or it won't work)
      accounts: [
        process.env.PRIVATE_KEY
      ],
    },
    kovan: {
      url: "https://kovan.infura.io/v3/" + process.env.INFURA_ID, //<---- YOUR INFURA ID! (or it won't work)
      accounts: [
        process.env.PRIVATE_KEY
      ],
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/" + process.env.INFURA_ID, //<---- YOUR INFURA ID! (or it won't work)
      accounts: [
        process.env.PRIVATE_KEY
      ],
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/" + process.env.INFURA_ID, //<---- YOUR INFURA ID! (or it won't work)
      accounts: [
        process.env.PRIVATE_KEY
      ],
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545", //<---- YOUR INFURA ID! (or it won't work)
      accounts: [
        process.env.PRIVATE_KEY
      ],
    },
    arbitrum: {
      url: 'https://arbitrum-rinkeby.infura.io/v3/' + process.env.INFURA_ID,
      accounts: [
        process.env.PRIVATE_KEY
      ],
    },
    local: {
      url: 'http://127.0.0.1:8545', //本地RPC地址
      //本地区块链账户地址(需要启动运行npx hardhat node命令开启本地开发环境的区块链)
      //这些账户地址和秘钥每次重启区块链都是相同的,并且数据会重置
      accounts: [
        // 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 (第一个账户地址及秘钥)
        '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
        // 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 (第二个账户地址及秘钥)
        '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
        // 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc (三个账户地址及秘钥)
        '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a',
        // 0x90f79bf6eb2c4f870365e785982e1f101e93b906 (第四个个账户地址及秘钥)
        '0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6',
        // 0x15d34aaf54267db7d7c367839aaf71a00a2c6a65 (第五个账户地址及秘钥)
        '0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a',
      ]
    }
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.APIKEY
  },
};
