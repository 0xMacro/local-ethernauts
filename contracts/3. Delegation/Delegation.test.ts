const { expect } = require("chai");
const { ethers } = require("hardhat");

let victim: any;
let hacker: any;
let delegate: any;
let deployer: any;

describe("Attacking Delegation", function () {
  beforeEach(async () => {
    [hacker, deployer] = await ethers.getSigners();
    const Delegate = await ethers.getContractFactory("Delegate");
    delegate = await Delegate.connect(deployer).deploy(deployer.address);
    const Victim = await ethers.getContractFactory("Delegation");
    victim = await Victim.connect(deployer).deploy(delegate.address);
    const Attacker = await ethers.getContractFactory("AttackingDelegation");
    await Attacker.deploy(victim.address);
  });

  async function hackContract() {
    // Code me!
  }

  // Get this to pass!
  it("Succesfully taken ownership of Delegate", async () => {
    await hackContract();
    const owner = await victim.owner();
    expect(owner).to.be.equal(hacker.address);
  });
});
