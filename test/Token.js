const {expect} = require('chai');
const { ethers } = require('hardhat');


describe("token Contract", ()=>{
    let Token;
    let hardhatToken;
    let owner;
    let addr1, addr2;
    beforeEach(async ()=>{
        hardhatToken = await ethers.deployContract("Token");
        [owner, addr1, addr2] = await ethers.getSigners();
    });
    describe("deployment", ()=>{
        it("owner set", async ()=>{
            expect(await hardhatToken.ownwer()).to.equal(owner.address);
        });
        it("total supply", async ()=>{
            const ownerBalance = await hardhatToken.balanceof(owner.address);
            console.log("owner address: ", owner.address);
            expect(await hardhatToken.TotalSupply()).to.equal(ownerBalance);
        });
    });
    describe("transactions", ()=>{
        it("check transfer to addr1", async ()=>{
            await hardhatToken.transfer(addr1.address, 10);
            expect(await hardhatToken.balanceof(addr1.address)).to.equal(10);
        });
        it("check transfer to addr2", async ()=>{
            await hardhatToken.transfer(addr2.address, 5);
            expect(await hardhatToken.balanceof(addr2.address)).to.equal(5);
        })
        it("check transfer from addr1 to addr2", async ()=>{
            await expect(hardhatToken.connect(addr1).transfer(addr2.address, 5)).to.be.revertedWith("Not enough ammount");
        })
        
    })
})
























// describe("Token Contract", ()=>{
//     it("total supply will go to owner", async ()=>{
//         const [owner] = await ethers.getSigners();
//         console.log("Signer object : ", owner);

//         //instance of a token
//         //token deploy
//         const hardhatToken = await ethers.deployContract("Token");

//         const ownerBalance = await hardhatToken.balanceof(owner.address);
//         console.log("owner address: ", owner.address);

//         expect(await hardhatToken.TotalSupply()).to.equal(ownerBalance);
//     });
    
//     it("check to transfer balance", async()=>{
//         const [owner, addr1,addr2] = await ethers.getSigners();
//         console.log("Signer object : ", owner);

//         //instance of a token
//         //token deploy
//         const hardhatToken = await ethers.deployContract("Token");
//         console.log("transfering to address 1 : ", addr1.address);
//         await hardhatToken.transfer(addr1.address, 10);
//         console.log("transfered to address1 : ", addr1);
//         // expect(await hardhatToken.TotalSupply()).to.equal(ownerBalance-10);
//         expect(await hardhatToken.balanceof(addr1.address)).to.equal(10);
//         //transfer 5 tokens to addr2
//         console.log("transfered token to address to : ", addr2.address);
//         await hardhatToken.transfer(addr2.address, 5);
//         expect(await hardhatToken.balanceof(addr2.address)).to.equal(5);
//     })
// })