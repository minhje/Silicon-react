import React from 'react'
import SubscribeBell from '../images/Misc/notification.svg'


const Subscribe = () => {
  return (
    <section id="subscribe">
    <div className="container">
        <div className="subscribe-content">
            <img src={SubscribeBell} alt="Notification icon"/>

        <h2 id="sub-mobile">Subscribe to our newsletter </h2>
        <h2 id="sub-laptop">Subscribe to our newsletter to stay informed about latest updates</h2>
    </div>

    <div className="email-form">
            <label className="form-label" for="email">Email adress</label>
            <i className="fa-regular fa-envelope"></i>
            <input className="form-input" type="email" name="emailAdress" id="email"
            required placeholder="Your email"/>
    </div> 

        <a className="btn-subscribe" href="#subscribe">Subscribe</a>
    

    </div>
</section>
  )
}

export default Subscribe