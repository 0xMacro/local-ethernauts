import { expect } from "chai";
import { ethers } from "hardhat";

let victim: any;
let attacker: any;
let hacker: any;
let deployer: any;
let kingPlayer: any;

describe("Attacking King", function () {
  beforeEach(async () => {
    [hacker, deployer, kingPlayer] = await ethers.getSigners();
    const Victim = await ethers.getContractFactory("King");
    victim = await Victim.connect(deployer).deploy({ value: 1 });
    const Attacker = await ethers.getContractFactory("AttackingKing");
    attacker = await Attacker.connect(hacker).deploy(victim.address);
  });

  // Get this to pass!
  it("Succesfully become and remain the king forever", async () => {
    await attacker.hackContract();
    await kingPlayer.sendTransaction({ value: 100, to: victim.address });
    const king = await victim._king();
    expect(king).to.not.equal(kingPlayer.address);
  });
});
