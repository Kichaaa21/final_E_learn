// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaymentContract {
    address payable public sender;
    uint  balance;
    event PaymentSent(address indexed _sender, address indexed _receiver, uint _amount);

    constructor() payable  {
        sender = payable(msg.sender);
         balance=msg.value;

    }

    function sendPayment(address payable _receiver, uint _amount) external payable {
        uint onewei=1000000000000000000;
        uint amount=_amount*onewei;
        require(msg.sender == sender, "Only the sender can initiate a payment");
        require(address(this).balance >= amount, "Insufficient contract balance");
        _receiver.transfer(amount);
        emit PaymentSent(sender, _receiver, amount);
    }


    
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
