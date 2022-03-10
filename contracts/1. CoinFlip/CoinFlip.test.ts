const { expect } = require("chai");
const { parseEther } = require("ethers/lib/utils");
const { ethers } = require("hardhat");

let victim: any;
let attacker: any;
let hacker: any;
let deployer: any;

describe("Attacking CoinFlip", function () {
  beforeEach(async () => {
    [hacker, deployer] = await ethers.getSigners();
    const Victim = await ethers.getContractFactory("CoinFlip");
    victim = await Victim.connect(deployer).deploy();
    const Attacker = await ethers.getContractFactory("AttackingCoinFlip");
    attacker = await Attacker.deploy(victim.address);
  });

  async function hackContract() {
    // Code me!
  }

  // Get this to pass!
  it("Succesfully guessess the correct outcome 10 times in a row", async () => {
    await hackContract();
    const consecutiveWins = await victim.consecutiveWins();
    expect(consecutiveWins).to.be.equal(10);
  });
});
