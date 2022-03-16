// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract Delegate {
    address public owner;

    constructor(address _owner) {
        owner = _owner;
    }

    function pwn() public {
        console.log("before pwn: %s", owner);
        owner = msg.sender;
        console.log("after pwn: %s", owner);
    }
}

contract Delegation {
    address public owner;
    Delegate public delegate;

    constructor(address _delegateAddress) {
        delegate = Delegate(_delegateAddress);
        owner = msg.sender;
    }

    fallback() external {
        console.log("before inside fallback: %s", owner);
        (bool result, ) = address(delegate).delegatecall(msg.data);
        if (result) {
            console.log("why not in here");
            this;
        }
    }
}
