import React from 'react'
import SubscribeBell from '../images/Misc/notification.svg'
import SubscribeForm from './SubscribeForm'


const Subscribe = () => {
  return (
    <section id="subscribe">
    <div className="container">
        <div className="subscribe-content">
            <img src={SubscribeBell} alt="Notification icon"/>

        <h2 id="sub-mobile">Subscribe to our newsletter </h2>
        <h2 id="sub-laptop">Subscribe to our newsletter to stay informed about latest updates</h2>
    </div>

    <SubscribeForm />

    </div>
</section>
  )
}

export default Subscribe