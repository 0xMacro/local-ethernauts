const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");

let victim: any;
let attacker: any;
let preservationDeployer: any;

describe("Attacking Reentrance", function () {
  beforeEach(async () => {
    const [hacker, deployer] = await ethers.getSigners();
    preservationDeployer = deployer;
    const LibraryOne = await ethers.getContractFactory("LibraryContract");
    const libraryOne = await LibraryOne.connect(deployer).deploy();
    const LibraryTwo = await ethers.getContractFactory("LibraryContract");
    const libraryTwo = await LibraryTwo.connect(deployer).deploy();
    const Victim = await ethers.getContractFactory("Preservation");
    victim = await Victim.connect(deployer).deploy(
      libraryOne.address,
      libraryTwo.address
    );
    const Attacker = await ethers.getContractFactory("AttackingPreservation");
    attacker = await Attacker.connect(hacker).deploy(victim.address);
  });

  async function hackContract() {
    // Code me!
  }

  // Get this to pass!
  it("Succesfully change the owner of Preservation", async () => {
    await hackContract();
    const owner = await victim.owner();
    expect(owner).to.not.equal(preservationDeployer.address);
  });
});
