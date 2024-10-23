import React from 'react'

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
                <img className="show-light" src="/images/appstore-light.svg" alt="AppStore button"/>
                <img className="show-dark" src="/images/appstore-dark.svg" alt="AppStore button"/>
            </a> 

            <a className="btn-store" href="#">
                <img className="show-light" src="/images/googleplay-light.svg" alt="Google Play button"/>
                <img className="show-dark" src="/images/googleplay-dark.svg" alt="Google Play button"/>
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
            <img className="iphone-budget" src="images/iphone-budget.svg" width="359" alt="iPhone with budget forecast" />
            <img className="iphone-cards" src="images/iphone-cards.svg" width="359" alt="iPhone with transactions" />
        </div>
        </div>
</section>
  )
}

export default Hero