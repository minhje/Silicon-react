import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <div className="breadcrumb container">
        <i className="fa-solid fa-house"></i>
        <NavLink className="nav-link" to="Home">Homepage</NavLink>
        <i className="fa-solid fa-chevron-right"></i>
        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </div>
  )
}

export default Breadcrumb