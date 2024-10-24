import React from 'react'
import TestimonialLight from '../images/Misc/testimonial.svg'
import TestimonialDark from '../images/Misc/testimonial-dark.svg'
import Testimonial2Light from '../images/Misc/testimonial-2.svg'
import Testimonial2Dark from '../images/Misc/testimonial-2-dark.svg'

const Testimonials = () => {
  return (
    <section id="testimonials">
    <div className="container">

    <div className="headline">
        <h2>Clients are Loving Our App</h2>
    </div>
    <div className="testimonial">
        <img className="show-light" src={TestimonialLight} alt=""/>
        <img className="show-dark" src={TestimonialDark} alt=""/>
    </div>
    <div className="testimonial-2">
        <img className="show-light" src={Testimonial2Light} alt=""/>
        <img className="show-dark" src={Testimonial2Dark} alt=""/>
    </div>

    </div>

</section>
  )
}

export default Testimonials