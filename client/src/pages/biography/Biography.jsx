import React from 'react'
import BioHero from '../../components/bioHero/BioHero'
import About from '../../components/about/About'
import Gallery from '../../components/gallery/Gallery'
import './Biography.css'

const Biography = () => {
  return (
    <div className="biography__container">
      <BioHero/>
      <About/>
      <Gallery/>
    </div>
  )
}

export default Biography