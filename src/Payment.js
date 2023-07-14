import { useState, useEffect } from "react";
import Web3 from 'web3';

import PaymentContract from "C:/Users/Administrator/OneDrive/Desktop/e-learn-blockchain/e-learn1/src/artifacts/contracts/Payment.sol/PaymentContract.json"
const {ethers} = require("ethers")

function Payment() {
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState();
  const [message, setMessage] = useState("");

 



  const web3 = new Web3(window.ethereum);
  const sender = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
  
    async function fetchBalance() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

      if (typeof window.ethereum === "undefined") {
        setMessage("Please install MetaMask to use this application.");
        return;
      }
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const sender = accounts[0];
      console.log('Connected to MetaMask with address:', sender);


    }


fetchBalance();

async function sendPayment(){
  await web3.eth.sendTransaction({
    from:sender,
        to:  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        value: web3.utils.toWei('1000', 'ether')
});
}
  return (
    <div>
      <h1>Payment App</h1>
      <p>Contract Balance: {balance}</p>
      <input
        type="text"
        placeholder="Receiver Address"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={sendPayment}>Send Payment</button>
      <p>{message}</p>
    </div>
  );
}

export default Payment;
