import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import ConsultationForm from '../Components/ConsultationForm'
import ContactUs from '../Components/ContactUs'
import Location from '../Components/Location'

const Contact = () => {
  return (
    <>
        <section id="contact">
            <Breadcrumb />
            
            <div className='grid-container container'>
                <ContactUs/>
                <ConsultationForm />
            </div>
        </section>

        <Location />
    </>
  )
}

export default Contact