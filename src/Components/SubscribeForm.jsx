import React, { useState } from 'react'

const SubscribeForm = () => {
    const [formData, setFormData] = useState({ email: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
            method: 'post', 
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
        <label className="form-label" htmlFor="email">Email adress</label>
        <i className="fa-regular fa-envelope"></i>
        <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your email"/>
        <button type='subscribe' className="btn-subscribe" href="#subscribe">Subscribe</button>
    </form>
  )
}

export default SubscribeForm