import React from 'react';
import './Footer.css';

import facebookIcon from '../../media/icons/facebook.svg'
import instagramIcon from '../../media/icons/instagram.svg'
import linkedinIcon from '../../media/icons/linkedin.svg'
import pinterestIcon from '../../media/icons/pinterest.svg'
import twitterIcon from '../../media/icons/twitter.svg'
import whatsappIcon from '../../media/icons/whatsapp.svg'

export interface SocialLinks {
    facebook: string;
    instagram: string;
    linkedin: string;
    pinterest: string;
    twitter: string;
    whatsapp: string;
}

export interface FooterProps {
    copyrightMessage: string;
    social: SocialLinks;
}

const Footer: React.SFC<FooterProps> = (props) => (
    <div className='footer'>
        <div className='footer-title'>
        <span className='copyright'>{props.copyrightMessage}</span>
            <br />
            <span className='credits'>Site by Silvio Biasiol</span>
            </div>
        <div className='footer-socials'>
            <a href={props.social.facebook}><img className='socials-icon' src={facebookIcon} alt='facebook' /></a>
            <a href={props.social.instagram}><img className='socials-icon' src={instagramIcon} alt='instagram'/></a>
            <a href={props.social.linkedin}><img className='socials-icon' src={linkedinIcon} alt='linkedin'/></a>
            <a href={props.social.pinterest}><img className='socials-icon' src={pinterestIcon} alt='pinterest'/></a>
            <a href={props.social.twitter}><img className='socials-icon' src={twitterIcon} alt='twitter'/></a>
            <a href={props.social.whatsapp}><img className='socials-icon' src={whatsappIcon} alt='whatsapp'/></a>
        </div>
    </div>
);

export default Footer;