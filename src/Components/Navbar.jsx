import React from 'react'
import LogoLight from '../images/SiliconLogo/silicon-logo.svg'
import LogoDark from '../images/SiliconLogo/silicon-logo-dark.svg'
import DarkmodeSwitch from './DarkmodeSwitch'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div className="container">
   
            <Link id="logo" to="/">
               <img className="show-light" src={LogoLight} alt="Silicon logotype"/>
               <img className="show-dark" src={LogoDark} alt="Silicon logotype"/>
            </Link>
            
            <nav id="main-menu" className="navbar">
               <NavLink className="nav-link" to="/">Features</NavLink>
               <NavLink className="nav-link" to="Contact">Contact</NavLink>
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