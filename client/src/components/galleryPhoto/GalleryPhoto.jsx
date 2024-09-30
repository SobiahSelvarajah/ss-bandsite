import React from 'react'
import Photo1 from '../../assets/images/photo-gallery-1.jpg'
import Photo2 from '../../assets/images/photo-gallery-2.jpg'
import Photo3 from '../../assets/images/photo-gallery-3.jpg'
import Photo4 from '../../assets/images/photo-gallery-4.jpg'
import Photo5 from '../../assets/images/photo-gallery-5.jpg'
import Photo6 from '../../assets/images/photo-gallery-6.jpg'
import Photo7 from '../../assets/images/photo-gallery-7.jpg'
import Photo8 from '../../assets/images/photo-gallery-8.jpg'
import Photo9 from '../../assets/images/photo-gallery-9.jpg'
import './GalleryPhoto.css'

const GalleryPhoto = () => {
  return (
    <div className="galleryPhoto__container">
        <img src={Photo1} alt="photo1" className="galleryPhoto__image" />
        <img src={Photo2} alt="photo2" className="galleryPhoto__image" />
        <img src={Photo3} alt="photo3" className="galleryPhoto__image" />
        <img src={Photo4} alt="photo4" className="galleryPhoto__image" />
        <img src={Photo5} alt="photo5" className="galleryPhoto__image" />
        <img src={Photo6} alt="photo6" className="galleryPhoto__image" />
        <img src={Photo7} alt="photo7" className="galleryPhoto__image" />
        <img src={Photo8} alt="photo8" className="galleryPhoto__image" />
        <img src={Photo9} alt="photo9" className="galleryPhoto__image" />
    </div>
  )
}

export default GalleryPhoto