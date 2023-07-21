import React from 'react';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-left">
        <h1 className='nav-title'>StrtNFT</h1>
      </div>

      <div className="nav-right">
        <button className='btn'>
          <a href="./">
            Mint
          </a>
        </button>
      </div>
    </div>
  )
};

export default Navbar;