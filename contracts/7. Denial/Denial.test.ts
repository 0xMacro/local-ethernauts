import { assert, expect } from "chai";
import { ethers } from "hardhat";

let victim: any;
let attacker: any;
let deployer: any;
let hacker;

describe("Attacking Denial", function () {
  beforeEach(async () => {
    [hacker, deployer] = await ethers.getSigners();
    const Victim = await ethers.getContractFactory("Denial");
    victim = await Victim.connect(deployer).deploy({
      value: ethers.utils.parseEther("100"),
    });
    const Attacker = await ethers.getContractFactory("AttackingDenial");
    attacker = await Attacker.connect(hacker).deploy(victim.address);
    victim.setWithdrawPartner(attacker.address);
  });

  // Get this to pass!
  it("Succesfully stop the owner from withdrawing", async () => {
    const provider = ethers.provider;
    let error;
    try {
      await provider.getBalance(deployer.address);
      await victim.withdraw();
    } catch (err) {
      error = err.message;
    } finally {
      if (!error) {
        assert.fail("Deployer got their funds!");
      }
      expect(error).to.include("Transaction ran out of gas");
    }
  });
});
