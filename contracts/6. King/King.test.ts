const { expect } = require("chai");
const { ethers } = require("hardhat");

let victim: any;
let attacker: any;
let player: any;

describe("Attacking King", function () {
  beforeEach(async () => {
    const [hacker, deployer, randomPlayer] = await ethers.getSigners();
    player = randomPlayer;
    const Victim = await ethers.getContractFactory("King");
    victim = await Victim.connect(deployer).deploy({ value: 1 });
    const Attacker = await ethers.getContractFactory("AttackingKing");
    attacker = await Attacker.connect(hacker).deploy(victim.address);
  });

  async function hackContract() {
    // Code me!
    // don't send more than 100 eth
  }

  // Get this to pass!
  it("Succesfully become the king and remain the king forever", async () => {
    await hackContract();
    await player.sendTransaction({ value: 100, to: victim.address });
    const king = await victim._king();
    expect(king).to.not.equal(player.address);
  });
});
