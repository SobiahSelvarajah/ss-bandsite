import React from 'react'
import './ShowsHero.css'

const ShowsHero = () => {
  return (
    <div className="showsHero__container">
        <section className="showsHero__content">
            <h3 className="showsHero__subheading">
                Beautiful Beasts Album
            </h3>
            <h1 className="showsHero__heading">
                Queen of Yellow x
                <br/>
                For The Strings
            </h1>
        </section>
        <div className="showsHero__media">
        <iframe 
            className='showsHero__soundcloud'
            width="100%" 
            height="166" 
            // scrolling="no" 
            frameborder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1863722541&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            
        ></iframe>
        {/* <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
            <a href="https://soundcloud.com/ukowens1" title="LONOWN" target="_blank" style="color: #cccccc; text-decoration: none;">LONOWN</a> · <a href="https://soundcloud.com/ukowens1/avangard" title="LONOWN - AVANGARD" target="_blank" style="color: #cccccc; text-decoration: none;">LONOWN - AVANGARD
            </a>
        </div> */}
            {/* 
            iframe element 
            soundcloud file 
            */}
        </div>
    </div>
  )
}

export default ShowsHero