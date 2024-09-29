import React from 'react'
import AboutHeading from '../aboutHeading/AboutHeading'
import AboutPic from '../aboutPic/AboutPic'
import './About.css'

const About = () => {
  return (
    <article className="about__container">
        <AboutHeading/>
        <AboutPic/>
        {/* comment */}
        {/* description */}
    </article>
  )
}

export default About