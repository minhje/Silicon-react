import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'

const Contact = () => {
  return (
    <>
       <Breadcrumb />
        <main>
            <section id="contact">
                <div className='grid-container container'>
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

                <div className="form-container">
                    <h3>Get Online Consultation</h3>
                    <form id='consult-form'>
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input type="text" id='fullName' />  

                        <label htmlFor="email" className="form-label">Email adress</label>
                        <input type="email" id="email" className="form-input" required></input>
                        
                        <label htmlFor="specialist" className="form-label">Specialist</label>
                        <select id="specialist" name='specialist'>
                            <option value=""></option>
                            <option value="Specialist 2">Specialist 1</option>
                            <option value="Specialist 2">Specialist 1</option>
                        </select>
                        
                        <button type='submit' className='btn-primary'>Make an appointment</button>   
                    </form>
                </div>
                </div>

            </section>
        </main>

    </>
  )
}

export default Contact