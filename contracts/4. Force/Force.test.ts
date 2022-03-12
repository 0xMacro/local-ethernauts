import { expect } from "chai";
import { ethers } from "hardhat";

let victim: any;

describe("Attacking Force", function () {
  beforeEach(async () => {
    const Victim = await ethers.getContractFactory("Force");
    victim = await Victim.deploy();
    const Attacker = await ethers.getContractFactory("AttackingForce");
    await Attacker.deploy(victim.address);
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
