import React from 'react'
import AboutHeading from '../aboutHeading/AboutHeading'
import AboutPic from '../aboutPic/AboutPic'
import AboutComment from '../aboutComment/AboutComment'
import AboutDesc from '../aboutDesc/AboutDesc'
import './About.css'

const About = () => {
  return (
    <article className="about__container">
        <AboutHeading/>
        <AboutPic/>
        <AboutComment/>
        <AboutDesc/>
    </article>
  )
}

export default About