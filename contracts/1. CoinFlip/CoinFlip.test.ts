import { expect } from "chai";
import { ethers } from "hardhat";

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
    // for (let i = 0; i < 10; i++) {
    await attacker.hackContract();
    // }
    const consecutiveWins = await victim.consecutiveWins();
    expect(consecutiveWins).to.be.equal(10);
  });
});
