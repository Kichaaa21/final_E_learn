import Web3 from 'web3';


function MetaMask() {

  // Connect to MetaMask
  async function connectToMetaMask() {
    // Request access to the MetaMask accounts
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  
    // Create a Web3 instance using the MetaMask provider
    const web3 = new Web3(window.ethereum);
  
    // You can now use the web3 instance to interact with the blockchain
    // For example, you can get the connected account:
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    console.log('Connected to MetaMask with address:', address);
  
    // You can also send transactions using the web3 instance, for example:
    const transaction = {
      from: address,
      to: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
      value: web3.utils.toWei('1000', 'ether')
    };
  
    const response = await web3.eth.sendTransaction(transaction);
    console.log('Transaction sent:', response);
  }
  
  // Call the connectToMetaMask function to initiate the connection
  connectToMetaMask();
  
}


export default MetaMask;