import React from 'react'
import './FooterText.scss'

const FooterText = () => {
  return (
    <div className="footerText__container">
        <section className="footerText__content">
            <h4 className="footerText__name">
                Cam Adams
                <br/>
                The Bees Knees Management
            </h4>
            <h5 className="footerText__address">
                503 Broadway Penthouse,
                <br/>
                New York, NY 10012, USA
            </h5>
            <h5 className="footerText__email">
                info@thebeesknees.com
            </h5>
        </section>
        <section className="footerText__content">
            <h4 className="footerText__name">
                Pearl Gregg
                <br/>
                Limitless Artist Group
            </h4>
            <h5 className="footerText__address">
                Booking Agent for
                <br/>
                US / South America / Japan
            </h5>
            <h5 className="footerText__email">
                pearl.gregg@limitlessag.com
            </h5>
        </section>
        <section className="footerText__content">
            <h4 className="footerText__name">
                Carson Whyte
                <br/>
                ARCH Entertainment
            </h4>
            <h5 className="footerText__address">
                Booking Agent for
                <br/>
                UK / EU / AU
            </h5>
            <h5 className="footerText__email">
                cwhyte@archentertainment.com
            </h5>
        </section>
    </div>
  )
}

export default FooterText