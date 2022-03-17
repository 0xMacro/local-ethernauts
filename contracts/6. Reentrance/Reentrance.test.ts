import { expect } from "chai";
import { ethers, waffle } from "hardhat";

let victim: any;
let attacker: any;

describe("Attacking Reentrance", function () {
  beforeEach(async () => {
    const Victim = await ethers.getContractFactory("Reentrance");
    victim = await Victim.deploy({ value: 5 });
    const Attacker = await ethers.getContractFactory("AttackingReentrance");
    attacker = await Attacker.deploy(victim.address, { value: 1 });
  });

  // Get this to pass!
  it("Succesfully take all the ETH out of the contract", async () => {
    await attacker.hackContract();
    const provider = waffle.provider;
    const balance = await provider.getBalance(victim.address);
    expect(balance).to.equal(0);
  });
});
