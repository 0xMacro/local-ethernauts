import { expect } from "chai";
import { ethers, waffle } from "hardhat";

let victim: any;
let attacker: any;

describe("Attacking Force", function () {
  beforeEach(async () => {
    const Victim = await ethers.getContractFactory("Force");
    victim = await Victim.deploy();
    const Attacker = await ethers.getContractFactory("AttackingForce");
    attacker = await Attacker.deploy(victim.address, { value: 100 });
  });

  // Get this to pass!
  it("Succesfully give the force contract some ETH", async () => {
    await attacker.hackContract();
    const provider = waffle.provider;
    const balance = await provider.getBalance(victim.address);
    expect(balance).to.be.above(0);
  });
});
