import { expect } from "chai";
import { ethers } from "hardhat";

let victim: any;
let attacker: any;
let hacker: any;

describe("Attacking Token", function () {
  beforeEach(async () => {
    // needed to get hacker address here so i could transfer to them
    const [h] = await ethers.getSigners();
    hacker = h;
    const Victim = await ethers.getContractFactory("Token");
    victim = await Victim.deploy(20);
    const Attacker = await ethers.getContractFactory("AttackingToken");
    attacker = await Attacker.deploy(victim.address);
  });

  // Get this to pass!
  it("Succesfully get your hands on more than 20 tokens", async () => {
    await attacker.hackContract();
    // const tokens = await victim.balanceOf(attacker.address);
    // const justInCase = await victim.transfer(hacker.address, 22);
    // console.log("justInCase", justInCase);
    const tokens = await victim.balanceOf(hacker.address);
    expect(tokens).to.be.above(20);
  });
});
