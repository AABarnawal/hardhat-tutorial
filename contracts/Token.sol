// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.24;

import "hardhat/console.sol";

contract Token{
    string public name = "Hardhat Token";
    string public symbol = "HHT";
    uint public TotalSupply = 10000;

    address public ownwer;

    mapping(address=>uint) balances;

    constructor(){
        balances[msg.sender] = TotalSupply;
        ownwer = msg.sender;
    }

    function transfer(address to, uint amount ) external{
        // require(balances[msg.sender]>=amount, "Not enough ammount");
        console.log("**owner balance %s ", balances[msg.sender]);
        console.log("**sender is sending to  %s is sending %s ammount", to, amount);
        balances[msg.sender]-=amount;
        balances[to] += amount;
    }

    function balanceof(address account)external view returns (uint256) {
        return balances[account];
    }

}