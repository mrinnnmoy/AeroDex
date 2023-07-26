import React from 'react';
import Countdown from 'react-countdown';
import NFT from "../assets/demo-nft.png";

const Home = () => {

  return (
    <div className='home'>

      <div className="section-left">
        <img src={NFT} alt="demo-nft" className='.nft' />
      </div>

      <div className="section-right">
        <Countdown date={Date.now() + 5000000000} className='count-down' />
        <p>Mint a Free NFT from a contract I deployed and view it on OpenSea!</p>
        <button className='btn'>Learn More!</button>
      </div>

    </div>
  )
};

export default Home;