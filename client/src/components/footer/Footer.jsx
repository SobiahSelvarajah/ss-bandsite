import React from 'react'
import Logo from '../../assets/logo/logo-bandsite.svg'
import FooterText from '../footerText/FooterText'
import FooterTop from '../footerTop/FooterTop'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer__container">
        <FooterTop/>
        <FooterText/>

        {/* logo container */}
        <div className="footer__logoContainer">
            <img src={Logo} alt="logo" className="footer__bottomLogo" />
            <h5 className="footer__copyrightText">
                Copyright The Bees Knees 2021 All Rights Reserved
            </h5>            
        </div>
        
    </footer>
  )
}

export default Footer