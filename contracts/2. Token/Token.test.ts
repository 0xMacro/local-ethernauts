import { expect } from "chai";
import { ethers } from "hardhat";

let victim: any;
let attacker: any;

describe("Attacking Token", function () {
  beforeEach(async () => {
    const Victim = await ethers.getContractFactory("Token");
    victim = await Victim.deploy(20);
    const Attacker = await ethers.getContractFactory("AttackingToken");
    attacker = await Attacker.deploy(victim.address);
  });

  // Get this to pass!
  it("Succesfully get your hands on more than 20 tokens", async () => {
    await attacker.hackContract();
    const tokens = await victim.balanceOf(attacker.address);
    expect(tokens).to.be.above(20);
  });
});
