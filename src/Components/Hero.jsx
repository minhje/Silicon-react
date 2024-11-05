import React from 'react'
import AppStoreLight from '../images/StoreButtons/appstore-light.svg'
import AppStoreDark from '../images/StoreButtons/appstore-dark.svg'
import GooglePlayLight from '../images/StoreButtons/googleplay-light.svg'
import GooglePlayDark from '../images/StoreButtons/googleplay-dark.svg'
import IphoneBudget from '../images/Iphones/iphone-budget.svg'
import IphoneCards from '../images/Iphones/iphone-cards.svg'
import Navbar from './Navbar'

const Hero = () => {
  return (
      <section id="hero">
        <div className="container"> 
            <div className="headline">
            <h1>Manage All Your Money in One App</h1>
          </div>

            <div className="content">
        <h2>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</h2>
        
        <div className="buttons">
            <a className="btn-store" href="#">
                <img className="show-light" src={AppStoreLight} alt="AppStore button"/>
                <img className="show-dark" src={AppStoreDark} alt="AppStore button"/>
            </a> 

            <a className="btn-store" href="#">
                <img className="show-light" src={GooglePlayLight} alt="Google Play button"/>
                <img className="show-dark" src={GooglePlayDark} alt="Google Play button"/>
            </a> 
 
        </div>

    

    <a href="#features" className="discover-more">
    <span className="btn-circle">
            <i className="fa-solid fa-chevron-down"></i>
    </span>
    <span className="btn-text">Discover more</span>
</a>

</div>
        
        <div className="images">
            <img className="iphone-budget" src={IphoneBudget} width="359" alt="iPhone with budget forecast" />
            <img className="iphone-cards" src={IphoneCards} width="359" alt="iPhone with transactions" />
        </div>
        </div>
</section>
  )
}

export default Hero