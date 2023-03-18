// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Rewardhub {
    
    mapping(address => uint256) public balances;
    
    event Deposit(address indexed depositor, uint256 amount);
    event Reward(address indexed depositor, uint256 amount, uint256 metadata);
    
    function deposit() public payable {
        require(msg.value == 0, "Invalid deposit amount"); 
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
        
        if (balances[msg.sender] >= 2 ether) {
            balances[msg.sender] -= 2 ether;
            emit Reward(msg.sender, 2 ether, 100); 
        }
    }
}