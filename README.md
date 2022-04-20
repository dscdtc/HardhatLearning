# Hardhat Learning
Hardhat demo poject to master the usage of hardhat.

# TODO List

- [x] 1. Create hardhat project
- [x] 2. hardhat deploy contract
- [x] 3. hardhat verify contract and check it on etherscan.io
- [x] 4. hardhat using contract
- [x] 5. tenderly resimulate

# Init a hardhat project

1. `mkdir hardhat-test`
2. `npm init -y`
3. `npm install -D hardhat`
4. `npx hardhat`
5. `npm install -D @nomiclabs/hardhat-ethers @nomiclabs/hardhat-waffle ethereum-waffle chai`
6. modify hardhat.config.js & write .sol contract etc..
7. `npx hardhat compile` [this will add artifacts and cache dir]
8. `npx hardhat node`  # Start local dev node
9. `npx hardhat run scripts/demo-deploy.js --network local`
10. `npx hardhat test .\test\demo.test.js --network local` (test will auto compile no need to run complie command)
11. `npx hardhat console --network local`
12. deploy on testnet regist testnet on [infura](https://infura.io/) & modify hardhat.config &  `npx hardhat run scripts/demo-deploy.js --network kovan`
13. contract verify: Obtain apikey at https://etherscan.io/ & modify hardhat.config & `npm i -D @nomiclabs/hardhat-etherscan`
14. `npx hardhat verify <Contract Address> --network <network>`
15. test & debug & re-simulate on [tenderly](https://dashboard.tenderly.co/)


# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
