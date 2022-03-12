import { expect } from "chai";
import { ethers, waffle } from "hardhat";

let victim: any;
let attacker: any;

describe("Attacking Reentrance", function () {
  beforeEach(async () => {
    const Victim = await ethers.getContractFactory("Reentrance");
    victim = await Victim.deploy({ value: 10 });
    const Attacker = await ethers.getContractFactory("AttackingReentrance");
    attacker = await Attacker.deploy(victim.address);
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
