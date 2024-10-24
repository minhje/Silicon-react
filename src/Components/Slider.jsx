import React from 'react'
import Carousel from './Carousel'

const Slider = () => {
  return (
    <section id="how-does-it-work"> 

        <div className="container">

        <h2>How Does It Work?</h2>

    <Carousel />
       
    <div className="headline-3">
        <div className="headline-container">
    <h3 className="step-3">Step 3.</h3>
    <h3>Transfers to people from
        your contact list</h3></div>

        <p>Proin volutpat mollis egestas. Nam luctus facilisis
            ultrices. Pellentesque volutpat ligula est. Mattis
            fermentum, at nec lacus.</p>
    </div>

    <div id="headline-3-laptop">
        <h3>Latest transaction history</h3>
        <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. 
            Arcu sociis tristique quisque hac in consectetur condimentum. </p>
    </div>
    </div>
    </section>
    
  )
}

export default Slider