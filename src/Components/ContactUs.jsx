import React from 'react'

const ContactUs = () => {
  return (
    <div className='contact-container'>
        <h1>Contact us</h1>

        <div className="contact-us">
                <i className="fa-regular fa-envelope btn-circle"></i>
            <div className="text-content">
                <h3 className="features-title">Email us</h3>
                <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                <a href="#faq">Contact us<i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>

        <div className="contact-us">
        <i className="fa-solid fa-user-plus btn-circle"></i>
            <div className="text-content">
                <h3 className="features-title">Carreers</h3>
                <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                <a href="#faq">Send an application<i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
  )
}

export default ContactUs