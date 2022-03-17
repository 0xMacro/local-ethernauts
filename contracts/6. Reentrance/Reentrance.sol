// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract Reentrance {
    mapping(address => uint256) public balances;

    constructor() payable {}

    function donate(address _to) public payable {
        balances[_to] = balances[_to] + msg.value;
    }

    function balanceOf(address _who) public view returns (uint256 balance) {
        return balances[_who];
    }

    function withdraw() public {
        if (balances[msg.sender] >= 1) {
            (bool result, ) = msg.sender.call{value: balances[msg.sender]}("");
            if (result) {
                balances[msg.sender];
            }
            balances[msg.sender] = 0;
        }
    }

    receive() external payable {}
}
