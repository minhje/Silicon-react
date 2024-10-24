import React from 'react'
import Accordion from './Accordion'
import ContactPhone from '../images/Icons/icon-phone.svg'
import ContactChat from '../images/Icons/icon-chat.svg'

const Faq = () => {
  return (
    <section id="faq">
    <div className="container">
        <div className="headline">
       <h2>Any questions? Check out the FAQs</h2>
       </div>

       <Accordion />
       
         {/* Jag flyttade ner denna texten till ovanför knappen istället för 
         ovanför dragspelet, tyckte det var mer logiskt. */}
        <div className="contact-container">
        <p>Still have unanswered questions and need to get in touch?</p>
        <a id="contact-btn" href="#faq" className="btn-contact">
            <span>Contact us now</span>
         </a>
         
        <div id="contact-us">
            <div className="contact-phone">
            <img src={ContactPhone} alt="" />
                <p>Still have  questions?</p>
                <a href="#faq">Contact us <i className="fa-solid fa-arrow-right"></i></a>
            </div>

            <div className="contact-message">
            <img src={ContactChat} alt="" />
                <p>Don't like phone calls?</p>
                <a href="#faq">Contact us <i className="fa-solid fa-arrow-right"></i></a>
            </div>
         </div>
        </div>
    </div>
</section>

  )
}

export default Faq