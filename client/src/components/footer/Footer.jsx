import React from 'react'
import Instagram from '../../assets/icons/icon-instagram.svg'
import Facebook from '../../assets/icons/icon-facebook.svg'
import Twitter from '../../assets/icons/icon-twitter.svg'
import Logo from '../../assets/logo/logo-bandsite.svg'
import FooterText from '../footerText/FooterText'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer__container">

        {/* heading */}
        <h2 className="footer__heading">
            Get in Touch
        </h2>

        {/* socials */}
        <div className="footer__socials">
            <a href="https://www.instagram.com/" className="footer__socialsLink">
                <img src={Instagram} alt="instagram" className="footer__socialsLogo" />
            </a>
            <a href="https://www.facebook.com" className="footer__socialsLink">
                <img src={Facebook} alt="facebook" className="footer__socialsLogo" />
            </a>
            <a href="https://www.twitter.com" className="footer__socialsLink">
                <img src={Twitter} alt="twitter" className="footer__socialsLogo" />
            </a>
        </div>

        <FooterText/>

        {/* logo container */}
        <div className="footer__logoContainer">
            <img src={Logo} alt="logo" className="footer__logo" />
            <h5 className="footer__copyrightText">
                Copyright The Bees Knees 2021 All Rights Reserved
            </h5>            
        </div>
        
    </footer>
  )
}

export default Footer