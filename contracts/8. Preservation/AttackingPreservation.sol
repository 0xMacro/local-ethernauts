// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Preservation.sol";

contract AttackingPreservation {
    address public contractAddress;

    constructor(address _contractAddress) {
        contractAddress = _contractAddress;
    }
}
