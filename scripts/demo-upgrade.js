//安全帽模块
const { ethers, upgrades } = require("hardhat");

//主函数
async function main() {
  const upgradeContractName = 'DemoV2' //升级合约的名称
  const proxyContractAddress = '0x54d54B677914671FEe966Cf23F27E8B87375427A' //代理合约的名称
  const DemoUpgrade = await ethers.getContractFactory(upgradeContractName)
  console.log('Upgrading Demo...')
  await upgrades.upgradeProxy(proxyContractAddress, DemoUpgrade)
  console.log('Demo upgraded')
}

//升级合约
main().then(() => process.exit(0)).catch(error => {
  console.error(error)
  process.exit(1)
})