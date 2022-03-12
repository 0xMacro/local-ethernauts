// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Denial.sol";

contract AttackingDenial {
    address public contractAddress;

    constructor(address _contractAddress) {
        contractAddress = _contractAddress;
    }
}
