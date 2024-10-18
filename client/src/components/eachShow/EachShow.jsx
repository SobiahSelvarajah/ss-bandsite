import React from 'react'
import showData from '../../data/Shows.json'

const EachShow = () => {
    const eventDates = showData.map(event => 
        <section className="eachShow__container">
            <h3 className="eachShow__date">
                DATES
                <br/>
                {event.date}
            </h3>
            <h3 className="eachShow__venue">
                VENUE
                <br/>
                {event.venue}
            </h3>
            <h3 className="eachShow__location">
                LOCATION
                <br/>
                {event.location}
            </h3>
            <button className="eachShow__button">
                BUY TICKETS
            </button>
        </section>
    )
    
    return (
        <div>{eventDates}</div>
    )
}

export default EachShow