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
    victim = await Victim.connect(deployer).deploy({
      value: ethers.utils.parseEther("1"),
    });
    const Attacker = await ethers.getContractFactory("AttackingKing");
    attacker = await Attacker.connect(hacker).deploy(victim.address);
  });

  // Get this to pass!
  it("Succesfully become and remain the king forever", async () => {
    console.log("victim.address", victim.address);
    // await attacker.hackContract();
    // try {
    await hacker.sendTransaction({
      value: ethers.utils.parseEther("2"),
      to: victim.address,
    });
    await kingPlayer.sendTransaction({
      value: ethers.utils.parseEther("100"),
      to: victim.address,
    });
    // } catch (err) {
    //   console.log('err', err);
    // }
    const prize = await victim._prize();
    console.log("prize", prize);
    const king = await victim._king();
    console.log("king", king === hacker.address);
    console.log("attacker", attacker.address);
    // expect(king).to.not.equal(kingPlayer.address);
  });
});
