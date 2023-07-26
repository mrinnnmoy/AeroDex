import React, { useState } from 'react';
import { ethers } from 'ethers';

const Navbar = () => {

  const [provider, setProvider] = useState(null);
  const [connectedAddress, setConnectedAddress] = useState("");

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setProvider(provider);
        const address = await signer.getAddress();
        setConnectedAddress(address);
      } else {
        alert("Metamask not found. Please install Metamask to continue.");
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  return (
    <div className='nav'>
      <div className="nav-left">
        <h1 className='nav-title'>StrtNFT</h1>
      </div>

      <div className="nav-right">
        <button className='btn' onClick={connectWallet}>
          Connect
        </button>
      </div>
    </div>
  )
};

export default Navbar;