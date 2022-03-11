const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");

let victim: any;
let attacker: any;

describe("Attacking Reentrance", function () {
  beforeEach(async () => {
    const [hacker, deployer] = await ethers.getSigners();
    const Victim = await ethers.getContractFactory("Reentrance");
    victim = await Victim.connect(deployer).deploy({ value: 10 });
    const Attacker = await ethers.getContractFactory("AttackingReentrance");
    attacker = await Attacker.connect(hacker).deploy(victim.address);
  });

  async function hackContract() {
    // Code me!
  }

  // Get this to pass!
  it("Succesfully take all the ETH out of the contract", async () => {
    const provider = waffle.provider;
    await hackContract();
    const balance = await provider.getBalance(victim.address);
    expect(balance).to.equal(0);
  });
});
