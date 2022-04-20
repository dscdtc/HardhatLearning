const { expect } = require('chai') //断言模块
const { ethers } = require('hardhat') //安全帽模块

describe('Demo 合约测试', () => {
    // 测试集合执行前的勾子函数
    before(async () => {
        // 获取合约工厂对象
        this.Demo = await ethers.getContractFactory('Demo')
        // 通过合约工厂部署合约
        this.demo = await this.Demo.deploy()
    })

    // 获取score状态测试
    it('测试score等于0', async () => {
        const score = await this.demo.score()
        expect(score).to.be.equal(0)
    })

    // 修改score状态测试
    it('修改score等于100', async () => {
        await this.demo.setScore(100)
        const score = await this.demo.score()
        expect(score).to.be.equal(10186)
        console.info('Now score is:', score.toString())
    })
    // it('修改score等于2^256', async () => {
    //     await this.demo.setScore('asdf')
    //     const score = await this.demo.score()
    //     expect(score).to.throw(Error)
    // })
})