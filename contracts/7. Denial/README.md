# Denial

- This is a simple wallet that drips funds over time. You can withdraw the funds slowly by becoming a withdrawing partner
- Pass the challenge by denying the owner from withdrawing funds when they call withdraw() (whilst the contract still has funds, and the transaction is of 1M gas or less)

# Hints

- Understanding how the low level call function works in solidity will help complete this challenge
- Can you find a way to deplete the gas called with the withdrawl function?
