import React from 'react'
import GalleryHeading from '../galleryHeading/GalleryHeading'
import GalleryPhoto from '../galleryPhoto/GalleryPhoto'
import './Gallery.css'

const Gallery = () => {
  return (
    <section className="gallery__container">
        <GalleryHeading/>
        <GalleryPhoto/>
    </section>
  )
}

export default Gallery