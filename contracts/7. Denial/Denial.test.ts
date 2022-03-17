import { expect } from "chai";
import { ethers, waffle } from "hardhat";

let victim: any;
let attacker: any;
let deployer: any;

describe("Attacking Denial", function () {
  beforeEach(async () => {
    const [hacker, denialDeployer] = await ethers.getSigners();
    deployer = denialDeployer;
    const Victim = await ethers.getContractFactory("Denial");
    victim = await Victim.connect(denialDeployer).deploy({
      value: ethers.utils.parseEther("100"),
    });
    const Attacker = await ethers.getContractFactory("AttackingDenial");
    attacker = await Attacker.connect(hacker).deploy(victim.address);
    victim.setWithdrawPartner(attacker.address);
  });

  // Get this to pass!
  it("Succesfully stop the owner from withdrawing", async () => {
    await attacker.hackContract();
    const provider = waffle.provider;
    const balanceBefore = ethers.utils.formatEther(
      await provider.getBalance(deployer.address)
    );
    await victim.withdraw();
    const balanceAfter = ethers.utils.formatEther(
      await provider.getBalance(deployer.address)
    );
    expect(balanceBefore).to.equal(balanceAfter);
  });
});
