import React, { useState } from 'react';
import Web3 from 'web3';
// import Payment from './Payment';
import './coursecard.css';
import NavBar from 'C:/Users/Administrator/OneDrive/Desktop/e-learn-blockchain/e-learn1/src/Nav.jsx';
import TopBar from './topbar/TopBar';
import Carousel from './carousel/Carousel';
import Trusted from './trusted/Trusted';
import Footer from './footer/Footer';
// import Eth from 'ethjs-query';


function MetaMask() {
  const [address, setAddress] = useState('');
  const [web3, setWeb3] = useState(null);

  const cardsData = [
    {
      id: 1,
      imageSrc: 'https://leverageedu.com/blog/wp-content/uploads/2021/08/Best-Blockchain-Courses.png',
      title: 'BlockChain',
      text: "If you're  to learn more about blockchain technology,applications,Best free courses in the industry. Check out Cryptocurrency to gain a fundamental understanding of the cryptocurrency landscape.",
    },
    {
      id: 2,
      imageSrc: 'https://www.optilingo.com/wp-content/uploads/2019/02/199154810.jpg',
      title: 'Cyber security',
      text: 'Become a cyber security specialist. The very latest up-to-date information and methods. We cover operating system security, privacy, and patching. DevSec, digital forensics, cloud security',
    },
    {
      id: 3,
      imageSrc: 'https://juergenkurtz.files.wordpress.com/2015/10/conf-luneburg-2015.jpg',
      title: ' C++',
      text: 'C++ is a high-level cross-platform general-purpose programming language. It was created at Bell Labs by Bjarne Stroustrup as an extension to the C programming language.',
    },
    {
      id: 4,
      imageSrc: 'https://techcrunch.com/wp-content/uploads/2016/02/shutterstock_348701531.jpg?w=730&crop=1',
      title: 'Placement Traning',
      text: 'The Central Line Placement Skills course follows the 2010 Central Venous Access Device Guidelines for central venous catheter insertion for HHC, which includes the use of the central line bundle kit',
    },
    // {
    //   id: 5,
    //   imageSrc: 'https://s3.amazonaws.com/media.the-next-tech.com/wp-content/uploads/2020/05/19162205/learn-new-language.jpg',
    //   title: 'Learn English',
    //   text: 'Learn English Online. We have been helping people with their English since 1999. For the love of English. Learn English Online is our free ESL beginner and intermediate learners course. ',
    // },
    // {
    //   id: 6,
    //   imageSrc: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200717144410/Learn-C-Programming-for-Beginners-A-20-Day-Curriculum.png',
    //   title: 'C',
    //   text: 'Learn C Programming or improve your skills online today. Choose from a wide range of C Programming courses offered from top universities and industry leaders.Upskill skill  ',
    // },
    // {
    //   id: 7,
    //   imageSrc: 'https://blog.ted.com/wp-content/uploads/sites/2/2014/11/learning_a_language.png',
    //   title: 'Data Analist',
    //   text: 'The average salary for a Data Analyst in New York is $86,704. Learn more about additional compensation, pay by gender and years of experience.To become a Well rich person.',
    // },
    // {
    //   id: 8,
    //   imageSrc: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
    //   title: 'PhotoGraphy',
    //   text: "Whether you have experience and want to improve your skills, or you're considering a career in Photography,  features a wide range of Photography courses, Fashion Photography courses ",
    // },
    // Add more card data as needed
  ];

  // Connect to MetaMask
  async function connectToMetaMask() {
    // Request access to the MetaMask accounts
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Create a Web3 instance using the MetaMask provider
    const web3Instance = new Web3(window.ethereum);
    setWeb3(web3Instance);

    // You can now use the web3 instance to interact with the blockchain
    // For example, you can get the connected account:
    const accounts = await web3Instance.eth.getAccounts();
    const connectedAddress = accounts[0];
    setAddress(connectedAddress);
    alert('Connected to MetaMask with address: ' + connectedAddress);

    // You can also send transactions using the web3 instance, for example:
  }

  async function transfer() {
    if (!web3) {
      console.log('Web3 instance not available. Connect to MetaMask first.');
      return;
    }
  
    const valueInEther = '100'; // Change this to a smaller value, like '0.001'
    const valueInWei = web3.utils.toWei(valueInEther, 'ether');
  
    const transaction = {
      from: address,
      to: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
      value: valueInWei
    };
  
    try {
      const response = await web3.eth.sendTransaction(transaction);
      console.log('Transaction sent:', response);
    } catch (error) {
      console.error('Error sending transaction:', error.message);
    }
  }
  
  async function fetchData() {
    if (!web3) {
      console.log('Web3 instance not available. Connect to MetaMask first.');
      return;
    }

    try {
      // Mathe RPC call (example: get the latest block number)
      const blockNumber = await web3.eth.getBlockNumber();

      // Process the output as needed
      console.log('Latest block number:', blockNumber);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  return (
    <div>
      <NavBar />
      {/* <TopBar /> */}
      <Carousel />
      <Trusted />
      <h1 className='trending'>Trending Course</h1>
    <div className='container'>
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <img className="card-img-top" src={card.imageSrc} alt="CardImage cap" />
          <div className="card-body">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text">{card.text}</p>
            <button className="btn btn-1" onClick={connectToMetaMask}>
              Connect to MetaMask
            </button>
            <button className="btn btn-2" onClick={transfer}>
                Buy @ 100ETH
            </button>

          </div>
        </div>
      ))}
    </div>
    <Footer />
    </div>
  );
}

export default MetaMask;
