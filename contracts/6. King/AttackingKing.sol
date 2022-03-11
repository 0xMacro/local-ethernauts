// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./King.sol";

contract AttackingKing {
    address public contractAddress;

    constructor(address _contractAddress) {
        contractAddress = _contractAddress;
    }
}
