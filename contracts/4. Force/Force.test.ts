import { expect } from "chai";
import { ethers } from "hardhat";

let victim: any;
let attacker: any;

describe("Attacking Force", function () {
  beforeEach(async () => {
    const Victim = await ethers.getContractFactory("Force");
    victim = await Victim.deploy();
    const Attacker = await ethers.getContractFactory("AttackingForce");
    attacker = await Attacker.deploy(victim.address);
  });

  // Get this to pass!
  it("Succesfully give the force contract some ETH", async () => {
    await attacker.hackContract();
    const balance = await victim.balanceOf();
    expect(balance).to.be.above(0);
  });
});
