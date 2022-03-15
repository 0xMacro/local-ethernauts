// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./King.sol";

contract AttackingKing {
    address public contractAddress;

    constructor(address _contractAddress) {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        // Code me!
        // Don't send more than 100 eth
    }
}
