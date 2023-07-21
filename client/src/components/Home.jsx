import React, { useEffect, useState } from 'react';
import NFT from "../assets/demo-nft.png";

const Home = () => {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className='home'>

      <div className="section-left">
        <img src={NFT} alt="demo-nft" className='.nft' />
      </div>

      <div className="section-right">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        <p>Mint a Free NFT from a contract I deployed and view it on OpenSea!</p>
        <button className='btn'>Learn More!</button>
      </div>

    </div>
  )
};

export default Home;