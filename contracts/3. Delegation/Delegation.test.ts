import { expect } from "chai";
import { ethers } from "hardhat";

let victim: any;
let hacker: any;
let delegateContract: any;
let deployer: any;

describe("Attacking Delegation", function () {
  beforeEach(async () => {
    [hacker, deployer] = await ethers.getSigners();
    const DelegateContract = await ethers.getContractFactory("Delegate");
    delegateContract = await DelegateContract.connect(deployer).deploy(
      deployer.address
    );
    const Victim = await ethers.getContractFactory("Delegation");
    victim = await Victim.connect(deployer).deploy(delegateContract.address);
    const Attacker = await ethers.getContractFactory("AttackingDelegation");
    await Attacker.deploy(victim.address);
  });

  async function hackContract() {
    // Code me!
  }

  // Get this to pass!
  it("Succesfully taken ownership", async () => {
    await hackContract();
    const owner = await victim.owner();
    expect(owner).to.be.equal(hacker.address);
  });
});
