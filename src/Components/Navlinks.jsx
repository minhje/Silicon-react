import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlinks = ({ onLinkClick }) => {
  return (
    <>
    <NavLink className="nav-link" to="/features" onClick={onLinkClick}>Features</NavLink>
    <NavLink className="nav-link" to="/contact" onClick={onLinkClick}>Contact</NavLink>
  </>
  )
}

export default Navlinks