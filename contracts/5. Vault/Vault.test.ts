const { expect } = require("chai");
const { ethers } = require("hardhat");

let victim: any;
let delegate: any;

describe("Attacking Vault", function () {
  beforeEach(async () => {
    const [hacker, deployer] = await ethers.getSigners();
    const Victim = await ethers.getContractFactory("Vault");
    victim = await Victim.connect(deployer).deploy(
      ethers.utils.formatBytes32String("A very strong password")
    );
    const Attacker = await ethers.getContractFactory("AttackingVault");
    await Attacker.connect(hacker).deploy(victim.address);
  });

  async function hackContract() {
    // Code me!
    // Note: Unlock without using the string "A very strong password"
    // see if you can do it by reading the password from the vault directly
  }

  // Get this to pass!
  it("Succesfully unlock the vault", async () => {
    await hackContract();
    const locked = await victim.locked();
    expect(locked).to.be.equal(false);
  });
});
