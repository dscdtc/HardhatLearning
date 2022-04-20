//hardhat库使用ethers组件与区块链进行交互
const { ethers } = require("hardhat");

//部署主函数
async function main() {
    const Demo = await ethers.getContractFactory("Demo");
    const demo = await Demo.deploy()
    console.log(demo.address)
}

//执行部署
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});

// WIXIM45f0ByX72yrvgnViWvLnSPp3g6X