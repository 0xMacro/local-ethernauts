import { expect } from "chai";
import { ethers } from "hardhat";

let victim: any;
let attacker: any;
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
    attacker = await Attacker.deploy(victim.address);
  });

  // Get this to pass!
  it("Succesfully taken ownership", async () => {
    // let owner = await victim.owner();
    // console.log("owner", owner);
    await attacker.hackContract();
    // const ABI = ["function pwn()"];
    // const iface = new ethers.utils.Interface(ABI);
    // const data = iface.encodeFunctionData("pwn");
    // victim.sendTransaction({
    //   from: attacker.address,
    //   data,
    // });
    // attacker.sendTransaction({

    // })
    const owner = await victim.owner();
    expect(owner).to.be.equal(attacker.address);
  });
});
