// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import "./Token.sol";

contract AttackingToken {
    address public contractAddress;

    constructor(address _contractAddress) public {
        contractAddress = _contractAddress;
    }
}
