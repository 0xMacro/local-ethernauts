const { expect } = require("chai");
const { parseEther } = require("ethers/lib/utils");
const { ethers } = require("hardhat");

let victim: any;
let attacker: any;
let hacker: any;
let deployer: any;

describe("Attacking Token", function () {
  beforeEach(async () => {
    [hacker, deployer] = await ethers.getSigners();
    const Victim = await ethers.getContractFactory("Token");
    victim = await Victim.connect(deployer).deploy(20);
    const Attacker = await ethers.getContractFactory("AttackingToken");
    attacker = await Attacker.deploy(victim.address);
  });

  async function hackContract() {
    // Code me!
  }

  // Get this to pass!
  it("Succesfully get your hands on more than 20 tokens", async () => {
    await hackContract();
    const tokens = await victim.balanceOf(attacker.address);
    expect(tokens).to.be.above(20);
  });
});
