import React from 'react'
import Brand1 from '../images/Brands/logo-1.svg'
import Brand2 from '../images/Brands/logo-2.svg'
import Brand3 from '../images/Brands/logo-3.svg'
import Brand4 from '../images/Brands/logo-4.svg'
import Brand5 from '../images/Brands/logo-5.svg'
import Brand6 from '../images/Brands/logo-6.svg'

const Brands = () => {
  return (
    <div id="brands">
            <div className="container">
            
            <div id="brand-1" className="brand-box">
            <img src={Brand1} alt="Logo ipsum"/></div>

            <div id="brand-2" className="brand-box">
            <img src={Brand2} alt="Logo ipsum"/></div>

            <div id="brand-3" className="brand-box">
            <img src={Brand3} alt="Logo ipsum"/></div>

            <div id="brand-4" className="brand-box">
            <img src={Brand4} alt="Logo ipsum"/></div>

            <div id="brand-5" className="brand-box">
            <img src={Brand5} alt="Logo ipsum"/></div>

            <div id="brand-6" className="brand-box">
            <img src={Brand6} alt="Logo ipsum"/></div>

            </div>
        </div>
  )
}

export default Brands