import React from 'react'
import Brands from './Brands'
import AppFeatures from './AppFeatures'
import FeaturesPhone from '../images/Iphones/phone-card.svg'


const Features = () => {
  return (
    <section id="features">
    <div className="container">
      
       <Brands />

        <div className="headline">
             <h2>App Features</h2>
             <p>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin volutpat mollis egestas.
            Nam luctus facilisis ultrices. Pellentesque
            volutpat ligula est. Mattis fermentum, at nec
            lacus. 
             </p>
        </div>

        <AppFeatures />
     
        <div className="features-iphone">
            <img src={FeaturesPhone} alt="iPhone with a card and transactions"/>
        </div>

       
    </div>
</section>
  )
}

export default Features