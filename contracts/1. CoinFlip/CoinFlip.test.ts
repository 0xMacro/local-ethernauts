import { expect } from "chai";
import { ethers } from "hardhat";
import helper from "./CoinFlipHelper"

let victim: any;
let attacker: any;

describe("Attacking CoinFlip", function () {
  beforeEach(async () => {
    const Victim = await ethers.getContractFactory("CoinFlip");
    victim = await Victim.deploy();
    const Attacker = await ethers.getContractFactory("AttackingCoinFlip");
    attacker = await Attacker.deploy(victim.address);
  });

  // Get this to pass!
  it("Succesfully guessess the correct outcome 10 times in a row", async () => {
    await helper(victim, attacker);
    const consecutiveWins = await victim.consecutiveWins();
    expect(consecutiveWins).to.be.equal(10);
  });
});
