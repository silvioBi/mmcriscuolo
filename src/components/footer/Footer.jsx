import React from 'react';
import './Footer.css';

const Footer = () => (
    <div className='footer'>
        <div className='footer-title'>
            <span className='copyright'>COPYRIGHT © 2020 MICHELE CRISCUOLO</span>
            <br />
            <span className='credits'>Site by Silvio Biasiol</span>
            </div>
        <div className='footer-socials'>
            <img className='socials-icon' src='media/icons/facebook.svg' />
            <img className='socials-icon' src='media/icons/instagram.svg' />
            <img className='socials-icon' src='media/icons/linkedin.svg' />
            <img className='socials-icon' src='media/icons/pinterest.svg' />
            <img className='socials-icon' src='media/icons/twitter.svg' />
            <img className='socials-icon' src='media/icons/whatsapp.svg' />
        </div>
    </div>
);

export default Footer;