// Denna komponent är skriven med hjälp av chat gpt. Valisering av formulär har gjorts med hjälp från det inspelade materialet på omniway. 

import React, { useState } from 'react';

const ConsultationForm = () => {
  const [options, setOptions] = useState([{ id: 1, text: "Specialist 1" }, { id: 2, text: "Specialist 2" }]) 
  const [formData, setFormData] = useState({fullName: '', email: '', specialist: options[0].text });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);


  const validateField = (name, value) => {
    let error = '';

    if (name === 'fullName' && !/^[A-Öa-ö\s\-]{2,}$/.test(value)) {
      error = "Your name must be at least 2 characters and can't contain numbers";
    } else if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
      error = "Please enter a valid email address (example@domain.com)";
    }

    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {}

    if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName)) {
      newErrors.fullName = "Your name must be at least 2 characters and can't contain numbers";
    }

    if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address (example@domain.com)";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "specialist") {
      const selectedOption = options.find(option => option.id === parseInt(value));
      setFormData({ ...formData, [name]: selectedOption.text });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    validateField(name, value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData)

        const res = await fetch(
          'https://win24-assignment.azurewebsites.net/api/forms/contact',
          {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData),
          })

    
    if (res.ok) {
      setSubmitted(true)
      setFormData({ fullName:'', email: '', specialist: options[0].text })

  }
}
}

const handleOK = () => {
  setSubmitted(false)
}

  return (
    <div className="form-container">
      {submitted ? (
        <div className="thank-you">
          <h3>Thank you for making an appointment!</h3>
          <p>We'll contact you as soon as possible</p>
          <button className='btn-primary' onClick={handleOK}>OK</button>
        </div>
      ) : (
        <>
          <h3>Get Online Consultation</h3>
          <form id="consult-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            {errors.fullName && <span className="validation-error">{errors.fullName}</span>}

            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <span className="validation-error">{errors.email}</span>}

            <label htmlFor="options" className="form-label">Specialist</label>
            <select
              id="specialist"
              name="specialist"
              value={options.find(option => option.text === formData.specialist)?.id || options[0].id}
              onChange={handleInputChange}
              required
            >
              {options.map(option => (
                <option key={option.id} value={option.id}>
                  {option.text}
                </option>
              ))}
            </select>

            <button type="submit" className="btn-primary">Make an appointment</button>
          </form>
          </>
      )}
    </div>
  )
}

export default ConsultationForm;
