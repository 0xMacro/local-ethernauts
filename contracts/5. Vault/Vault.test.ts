import { expect } from "chai";
import { ethers } from "hardhat";

let victim: any;

describe("Attacking Vault", function () {
  beforeEach(async () => {
    const Victim = await ethers.getContractFactory("Vault");
    victim = await Victim.deploy(
      ethers.utils.formatBytes32String("A very strong password")
    );
    const Attacker = await ethers.getContractFactory("AttackingVault");
    await Attacker.deploy(victim.address);
  });

  async function hackContract() {
    // Code me!
    /* 
      Note: Unlock without using the string "A very strong password"
      Unlock the vault by somehow reading the private password from 
      Vault directly
    */
  }

  // Get this to pass!
  it("Succesfully unlock the vault", async () => {
    await hackContract();
    const locked = await victim.locked();
    expect(locked).to.be.equal(false);
  });
});
