import React from 'react'
import Band from '../../assets/images/band.jpg'
import './AboutPic.css'

const AboutPic = () => {
  return (
    <div className="aboutPic__container">
        <img src={Band} alt="band" className="aboutPic__image" />
    </div>
  )
}

export default AboutPic