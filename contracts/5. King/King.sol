// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract King {
    address payable public king;
    uint256 public prize;
    address payable public owner;

    constructor() payable {
        owner = payable(msg.sender);
        king = payable(msg.sender);
        prize = msg.value;
        console.log("constructor");
    }

    receive() external payable {
        require(msg.value >= prize || msg.sender == owner);
        king.transfer(msg.value);
        king = payable(msg.sender);
        prize = msg.value;
    }

    function _king() public view returns (address payable) {
        console.log("inside King");
        return king;
    }

    function _prize() public view returns (uint256) {
        console.log("inside prize");
        return prize;
    }
}
