import React from 'react'
import Instagram from '../../assets/icons/icon-instagram.svg'
import Facebook from '../../assets/icons/icon-facebook.svg'
import Twitter from '../../assets/icons/icon-twitter.svg'
import Logo from '../../assets/logo/logo-bandsite.svg'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer__container">

        {/* heading */}
        <h1 className="footer__heading">
            Get in Touch
        </h1>

        {/* socials */}
        <div className="footer__socials">
            <a href="" className="footer__socialsLink">
                <img src={Instagram} alt="instagram" className="footer__socialsLogo" />
            </a>
            <a href="" className="footer__socialsLink">
                <img src={Facebook} alt="facebook" className="footer__socialsLogo" />
            </a>
            <a href="" className="footer__socialsLink">
                <img src={Twitter} alt="twitter" className="footer__socialsLogo" />
            </a>
        </div>

        {/* text */}
        <div className="footer__textContainer">
            <section className="footer__text">
                <h4 className="footer__name">
                    Cam Adams
                    <br/>
                    The Bees Knees Management
                </h4>
                <h5 className="footer__address">
                    503 Broadway Penthouse,
                    <br/>
                    New York, NY 10012, USA
                </h5>
                <h5 className="footer__email">
                    info@thebeesknees.com
                </h5>
            </section>
            <section className="footer__text">
                <h4 className="footer__name">
                    Pearl Gregg
                    <br/>
                    Limitless Artist Group
                </h4>
                <h5 className="footer__address">
                    Booking Agent for
                    <br/>
                    US / South America / Japan
                </h5>
                <h5 className="footer__email">
                    pearl.gregg@limitlessag.com
                </h5>
            </section>
            <section className="footer__text">
                <h4 className="footer__name">
                    Carson Whyte
                    <br/>
                    ARCH Entertainment
                </h4>
                <h5 className="footer__address">
                    Booking Agent for
                    <br/>
                    UK / EU / AU
                </h5>
                <h5 className="footer__email">
                    cwhyte@archentertainment.com
                </h5>
            </section>
        </div>
        
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