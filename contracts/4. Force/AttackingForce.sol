// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Force.sol";

contract AttackingForce {
    address public contractAddress;

    constructor(address _contractAddress) {
        contractAddress = _contractAddress;
    }
}
