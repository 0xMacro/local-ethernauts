# Vault

- The King contract represents a simple ponzi scheme type game: whoever sends it an amount of ether that is larger than the current prize becomes the new king.
- On such an event, the overthrown king gets paid the new prize, making a bit of ether in the process.
- The test will attempt to pass a large amount of ETH to reclaim kingship.
- Pass the challenge by not allowing anyone else to claim kingship

# Hints

- Understanding how the transfer works in solidity and how revert works will help you complete this challenge
- Understanding how fallback functions work in solidity will also help you complete this challenge
- Understanding revert, assert, and require will also help you complete this challenge

