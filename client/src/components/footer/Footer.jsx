import React from 'react'
import FooterTop from '../footerTop/FooterTop'
import FooterText from '../footerText/FooterText'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer__container">
        <FooterTop/>
        <FooterText/>
    </footer>
  )
}

export default Footer