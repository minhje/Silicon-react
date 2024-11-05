import React from 'react'
import Map from '../images/Misc/map.svg'
import ContactInfo from './ContactInfo'
import SocialMediaBtns from './SocialMediaBtns'

const Location = () => {
  return (
    <section id='location'>
    <div className='container'>
        <div className="map">
            <img src={Map} alt="" />
        </div>

        <div className="contact-info">
            <ContactInfo />
            <SocialMediaBtns />
        </div>

    </div>
    </section>
  )
}

export default Location