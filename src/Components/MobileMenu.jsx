// Kod skriven tillsammans med chatGTP

import React, { useState } from 'react';
import Navlinks from './Navlinks';


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

      {isOpen && <div className="menu-overlay" onClick={toggleNavbar}></div>}

      <div className={`menu-dropdown ${isOpen ? 'open' : ''}`}>
        < Navlinks onLinkClick={toggleNavbar}/>
      </div>
    </nav>
  );
};

export default MobileMenu;
