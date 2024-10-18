import React from 'react'
import './Shows.css'
import ShowsHero from '../../components/showsHero/ShowsHero'
import ShowsHeading from '../../components/showsHeading/ShowsHeading'
import EachShow from '../../components/eachShow/EachShow'

const Shows = () => {
  return (
    <div className="shows__container">
      <ShowsHero/>
      <ShowsHeading/>
      <EachShow/>
    </div>
  )
}

export default Shows