import React from 'react'
import LogoLight from '../images/SiliconLogo/silicon-logo.svg'
import LogoDark from '../images/SiliconLogo/silicon-logo-dark.svg'
import DarkmodeSwitch from './DarkmodeSwitch'

const Navbar = () => {
  return (
    <header>
        <div className="container">
   
            <a id="logo" href="index.html"><img className="show-light" src={LogoLight} alt="Silicon logotype"/><img className="show-dark" src={LogoDark} alt="Silicon logotype"/></a>
            
            <nav id="main-menu" className="navbar">
               <a className="nav-link" href="#features">Features</a>
            </nav>
   
            <DarkmodeSwitch />
   
            <a id="sign-in" href="#" className="btn-primary">
               <i className="fa-regular fa-user"></i>
               <span>Sign in / up</span>
            </a>
            
            <button className="btn-mobile" aria-label="Meny">
               <i className="fa-solid fa-bars"></i>
            </button>
        </div>
    </header>
   )
}

export default Navbar