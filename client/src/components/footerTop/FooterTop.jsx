import React from 'react'
import Instagram from '../../assets/icons/icon-instagram.svg'
import Facebook from '../../assets/icons/icon-facebook.svg'
import Twitter from '../../assets/icons/icon-twitter.svg'
import BandsiteLogo from '../../assets/logo/logo-bandsite.svg'
import './FooterTop.scss'

const FooterTop = () => {
  return (
    <div className="footerTop__container">
        <section className="footerTop__text">
            {/* heading */}
            <h2 className="footerTop__heading">
                Get in Touch
            </h2>

            {/* socials */}
            <div className="footerTop__socials">
                <a href="https://www.instagram.com/" className="footerTop__link">
                    <img src={Instagram} alt="instagram" className="footerTop__logo" />
                </a>
                <a href="https://www.facebook.com" className="footerTop__link">
                    <img src={Facebook} alt="facebook" className="footerTop__logo" />
                </a>
                <a href="https://www.twitter.com" className="footerTop__link">
                    <img src={Twitter} alt="twitter" className="footerTop__logo" />
                </a>
            </div>
        </section>
        <div className="footerTop__logoContainer">
            <img src={BandsiteLogo} alt="logo" className="footerTop__topLogo" />
        </div>
    </div>
  )
}

export default FooterTop