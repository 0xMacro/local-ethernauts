import { expect } from "chai";
import { ethers, waffle } from "hardhat";
import helper from "./VaultHelper";

let victim: any;

describe("Attacking Vault", function () {
  beforeEach(async () => {
    const Victim = await ethers.getContractFactory("Vault");
    victim = await Victim.deploy(
      ethers.utils.formatBytes32String("A very strong password")
    );
  });

  // Get this to pass!
  it("Succesfully unlock the vault", async () => {
    await helper(victim);
    const locked = await victim.locked();
    expect(locked).to.be.equal(false);
  });
});
