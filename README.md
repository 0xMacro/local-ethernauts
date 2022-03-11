# local-ethernauts

This challenge is based on https://ethernaut.openzeppelin.com/

# Setup

1. Get all the dependencies installed with `yarn install`
2. Compile all contracts by running `npx hardhat compile`
3. Run a local node by running `npx hardhat node`

# How to solve each level

- If you look inside the `contracts/` directory you'll find 9 levels for you to solve!
- Each level directory consists of the same structure, let's check out the first one to illustrate this:
  - **CoinFlip.sol**: This is the contract you're supposed to hack!
  - **AttackingCoinFlip.sol**: This is the malicious contract where you'll code the logic to exploit the vulnerable contract!
  - **CoinFlip.test.ts**: This is the file where you'll be able to interact with both of your contracts
    - There's only one test on these files, and it's the one that checks if you already breached the contract! Fill in the `hackContract()` function to get this one to pass
  - And finally, the **README**. On this one you'll get level instructions, along with all the resources needed to clear it!
- After you're done writing your hack, run the following command to run the tests and see if you succesfully breached the contract:
  - `npx hardhat test contracts/{contract directory}/{contract name}.test.ts`
  - Example: `npx hardhat test "contracts/1. CoinFlip/CoinFlip.test.ts"`
