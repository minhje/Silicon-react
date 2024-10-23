import React from 'react'

const Faq = () => {
  return (
    <section id="faq">
    <div className="container">
        <div className="headline">
       <h2>Any questions? Check out the FAQs</h2>
       
       </div>

      {/* Grunden till denna del är generarad av AI, där jag senare redigerat innehållet */}
        <div className="accordion"> 

            {/* Accordion Item 1 */}
            <div className="accordion-item">
                <input type="checkbox" id="item1"/>
                <label for="item1" className="accordion-title">Is any of my personal information
                    stored in the App?  
                    <span className="btn-circle-down">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span className="btn-circle-up">
                        <i className="fa-solid fa-chevron-up"></i>
                    </span>
                </label>
                <div className="accordion-content">
                    <p>Nunc duis id aenean gravida tincidunt eu, tempor
                        ullamcorper. Viverra aliquam arcu, viverra et,
                        cursus. Aliquet pretium cursus adipiscing gravida
                        et consequat lobortis arcu velit. Nibh pharetra
                        fermentum duis accumsan lectus non. Massa
                        cursus molestie lorem scelerisque pellentesque.
                        Nisi, enim, arcu purus gravida adipiscing euismod
                        montes, duis egestas. Vehicula eu etiam quam
                        tristique tincidunt suspendisse ut consequat.</p>
                        <p>Ornare senectus fusce dignissim ut. Integer
                            consequat in eu tortor, faucibus et lacinia
                            posuere. Turpis sit viverra lorem suspendisse
                            lacus aliquam auctor vulputate. Quis egestas
                            aliquam nunc purus lacus, elit leo elit facilisi.
                            Dignissim amet adipiscing massa integer.</p>
                </div>
            </div>
        
            { /* Accordion Item 2 */ }
            <div className="accordion-item">
                <input type="checkbox" id="item2"/>
                <label for="item2" className="accordion-title">What formats can I download my
                    transaction history in?
                    <span className="btn-circle-down">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span className="btn-circle-up">
                        <i className="fa-solid fa-chevron-up"></i>
                    </span>
                </label>
                <div className="accordion-content">
                    <p>Nunc duis id aenean gravida tincidunt eu, tempor
                        ullamcorper. Viverra aliquam arcu, viverra et,
                        cursus. Aliquet pretium cursus adipiscing gravida
                        et consequat lobortis arcu velit. Nibh pharetra
                        fermentum duis accumsan lectus non. Massa
                        cursus molestie lorem scelerisque pellentesque.</p>
                </div>
            </div>
        
             {/* Accordion Item 3  */}
            <div className="accordion-item">
                <input type="checkbox" id="item3"/>
                <label for="item3" className="accordion-title">Can I schedule future transfers?
                    <span className="btn-circle-down">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span className="btn-circle-up">
                        <i className="fa-solid fa-chevron-up"></i>
                    </span>
                </label>
                <div className="accordion-content">
                    <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. 
                        Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. 
                        Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. 
                        Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                </div>
            </div>

            {/* Accordion Item 4 */}
            <div className="accordion-item">
                <input type="checkbox" id="item4"/>
                <label for="item4" className="accordion-title">When can I use Banking App
                    services?
                    <span className="btn-circle-down">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span className="btn-circle-up">
                        <i className="fa-solid fa-chevron-up"></i>
                    </span>
                </label>
                <div className="accordion-content">
                    <p>Nunc duis id aenean gravida tincidunt eu, tempor
                        ullamcorper. Viverra aliquam arcu, viverra et,
                        cursus. Aliquet pretium cursus adipiscing gravida
                        et consequat lobortis arcu velit. Nibh pharetra
                        fermentum duis accumsan lectus non. Massa
                        cursus molestie lorem scelerisque pellentesque.
                        Nisi, enim, arcu purus gravida adipiscing euismod
                        montes, duis egestas.</p>
                </div>
            </div>
        
             {/* Accordion Item 5  */}
            <div className="accordion-item">
                <input type="checkbox" id="item5"/>
                <label for="item5" className="accordion-title">Can I create my own password that is
                    easy for me to remember?
                    <span className="btn-circle-down">
                        <i className="fa-solid fa-chevron-down"></i></span>
                        <span className="btn-circle-up">
                            <i className="fa-solid fa-chevron-up"></i>          
                    </span></label>
                <div className="accordion-content">
                    <p>Nunc duis id aenean gravida tincidunt eu, tempor
                        ullamcorper. Viverra aliquam arcu, viverra et,
                        cursus.</p>
                </div>
            </div>
        
             {/* Accordion Item 6 */}
            <div className="accordion-item">
                <input type="checkbox" id="item6"/>
                <label for="item6" className="accordion-title">What happens if I forget or lose my
                    password?
                    <span className="btn-circle-down">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span className="btn-circle-up">
                        <i className="fa-solid fa-chevron-up"></i>
                    </span></label>
                <div className="accordion-content">
                    <p>Nunc duis id aenean gravida tincidunt eu, tempor
                        ullamcorper. Viverra aliquam arcu, viverra et,
                        cursus. Aliquet pretium cursus adipiscing gravida
                        et consequat lobortis arcu velit.</p>
                </div>
            </div>
        </div>

         {/* Jag flyttade ner denna texten till ovanför knappen istället för 
         ovanför dragspelet, tyckte det var mer logiskt. */}
        <div className="contact-container">
        <p>Still have unanswered questions and need to get in touch?</p>
        <a id="contact-btn" href="#faq" className="btn-contact">
            <span>Contact us now</span>
         </a>
         
        <div id="contact-us">
            <div className="contact-phone">
                <img src="images/icon-phone.svg" alt=""/>
                <p>Still have  questions?</p>
                <a href="#faq">Contact us <i className="fa-solid fa-arrow-right"></i></a>
            </div>

            <div className="contact-message">
                <img src="images/icon-chat.svg" alt=""/>
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