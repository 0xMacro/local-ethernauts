// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Denial {
    address public partner; // withdrawal partner - pay the gas, split the withdraw
    address payable public owner;
    uint256 public timeLastWithdrawn;
    mapping(address => uint256) public withdrawPartnerBalances; // keep track of partners balances

    constructor() payable {
        owner = payable(msg.sender);
    }

    function setWithdrawPartner(address _partner) public {
        partner = _partner;
    }

    // withdraw 1% to recipient and 1% to owner
    function withdraw() public {
        uint256 amountToSend = address(this).balance / (100);
        // perform a call without checking return
        // The recipient can revert, the owner will still get their share
        partner.call{value: amountToSend}("");
        owner.call{value: amountToSend}("");
        // keep track of last withdrawal time
        timeLastWithdrawn = block.timestamp;
        withdrawPartnerBalances[partner] =
            withdrawPartnerBalances[partner] +
            (amountToSend);
    }

    // allow deposit of funds
    receive() external payable {}

    // convenience function
    function contractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
