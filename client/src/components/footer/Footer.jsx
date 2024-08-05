import React from 'react'
import Logo from '../../assets/logo/logo-bandsite.svg'
import FooterTop from '../footerTop/FooterTop'
import FooterText from '../footerText/FooterText'
import CopyrightText from '../copyrightText/CopyrightText'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer__container">
        <FooterTop/>
        <FooterText/>

        {/* logo container */}
        <div className="footer__logoContainer">
            <img src={Logo} alt="logo" className="footer__bottomLogo" />
            <CopyrightText/>
        </div>
        
    </footer>
  )
}

export default Footer