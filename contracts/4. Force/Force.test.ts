const { expect } = require("chai");
const { ethers } = require("hardhat");

let victim: any;

describe("Attacking Delegation", function () {
  beforeEach(async () => {
    const [hacker, deployer] = await ethers.getSigners();
    const Victim = await ethers.getContractFactory("Force");
    victim = await Victim.connect(deployer).deploy();
    const Attacker = await ethers.getContractFactory("AttackingForce");
    await Attacker.connect(hacker).deploy(victim.address);
  });

  async function hackContract() {
    // Code me!
  }

  // Get this to pass!
  it("Succesfully give the force contract some ETH", async () => {
    await hackContract();
    const balance = await victim.balanceOf();
    expect(balance).to.be.above(0);
  });
});
