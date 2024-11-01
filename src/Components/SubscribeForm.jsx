import React, { useState } from 'react'

const SubscribeForm = () => {
    const [formData, setFormData] = useState({ email: '' })
    const [errors, setErrors] = useState ({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})

        if (value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [name]: 'You need to enter a email adress'}))
        }
        else {
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }

    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const newErrors = {}
        
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = 'An email adress is required'
            }

            else if (!emailRegex.test(formData[field])) {
                newErrors[field] = 'You need to input a valid email adress'
                return false
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            setSubmitted(true)
            setFormData({ email: '' })

        }
    }

    if (submitted) {
        return (
            <div className="info-box">
           <h1>Thank you for subscribing to our newsletter!</h1> 
           <button className='btn-primary' onClick={handleOk}>OK</button>
        </div>
        )
    }

  return (

    <form onSubmit={handleSubmit} noValidate className="email-form">
        <div className="form-group">
        <label className="form-label" htmlFor="email">Email adress</label>
        <i className="fa-regular fa-envelope"></i>
        <input 
            className="form-input" 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required placeholder="Your email"
        />
        {errors.email && <span>{errors.email}</span>}
        </div>
        <button type='submit' className="btn-subscribe" href="#subscribe">Subscribe</button>
    </form>
  )
}

export default SubscribeForm