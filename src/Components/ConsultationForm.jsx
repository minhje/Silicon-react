import React from 'react'

const ConsultationForm = () => {
  return (
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
  )
}

export default ConsultationForm