import { expect } from "chai";
const { ethers } = require("hardhat");

let tokenVictim: any;
let tokenAttacker: any;
// let deployer: any;

describe("Attacking Token", function () {
  beforeEach(async () => {
    // const [hacker, deployer] = await ethers.getSigners();
    const Victim = await ethers.getContractFactory("Token");
    tokenVictim = await Victim.deploy(20);
    const Attacker = await ethers.getContractFactory("AttackingToken");
    tokenAttacker = await Attacker.deploy(tokenVictim.address);
  });

  async function hackContract() {
    // Code me!
  }

  // Get this to pass!
  it("Succesfully get your hands on more than 20 tokens", async () => {
    await hackContract();
    const tokens = await tokenVictim.balanceOf(tokenAttacker.address);
    expect(tokens).to.be.above(20);
  });
});
