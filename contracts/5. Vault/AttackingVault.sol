// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Vault.sol";

contract AttackingVault {
    address public contractAddress;

    constructor(address _contractAddress) {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        // Code me!
    }
}
