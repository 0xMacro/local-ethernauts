// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import "./Token.sol";

contract AttackingToken {
    address public contractAddress;

    // address public deployer;

    constructor(address _contractAddress) public {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        // Code me!
        // Token(contractAddress).transfer(deployer, 22);
    }
}
