import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <>
      <NavLink className="nav-link" to="/features">Features</NavLink>
      <NavLink className="nav-link" to="/contact">Contact</NavLink>
    </>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mobile-menu">
      <button 
        className="btn-mobile" 
        aria-label="Menu" 
        onClick={toggleNavbar}
      >
        <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {isOpen && (
        <div className="menu-dropdown">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default MobileMenu;
