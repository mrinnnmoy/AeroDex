import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
      <p>
        Courtesy Design | Developed by
        <a href="./" className='footer-name'>Mrinmoy.</a>
      </p>

      <div className="social-icons">
        <BsTwitter className='icon' />
        <BsGithub className='icon' />
        <BsLinkedin className='icon' />
      </div>
    </div>
  )
};

export default Footer;