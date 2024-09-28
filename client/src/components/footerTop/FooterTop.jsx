import React from 'react'
import Instagram from '../../assets/icons/icon-instagram.svg'
import Facebook from '../../assets/icons/icon-facebook.svg'
import Twitter from '../../assets/icons/icon-twitter.svg'
import './FooterTop.css'

const FooterTop = () => {
  return (
    <div className="footerTop__container">
        <section className="footerTop__text">
            <h2 className="footerTop__heading">
                Get in Touch
            </h2>
            <div className="footerTop__socials">
                <a href="https://www.instagram.com/" className="footerTop__link">
                    <img src={Instagram} alt="Instagram" className="footerTop__icon" />
                </a>
                <a href="https://www.facebook.com/" className="footerTop__link">
                    <img src={Facebook} alt="Facebook" className="footerTop__icon" />
                </a>
                <a href="https://www.twitter.com/" className="footerTop__link">
                    <img src={Twitter} alt="Twitter" className="footerTop__icon" />
                </a>
            </div>
        </section>
        {/* logo */}
    </div>
  )
}

export default FooterTop