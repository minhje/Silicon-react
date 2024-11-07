// Kod från Hans video "Omvandla din befintliga JavaScript-kod till React", anpassad till att passa min befintliga kod. 

import React, { useEffect, useState } from 'react'

const DarkmodeSwitch = () => {
    const [isDarkmode, setIsDarkmode] = useState(false);

    const toggleDarkmode = () => {
        const newMode = !isDarkmode;
        setIsDarkmode(newMode);
      
        if (newMode) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
        }
        else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
        }
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            setIsDarkmode(true)
          }
          else {
            document.documentElement.setAttribute('data-theme', 'light');
            setIsDarkmode(false)
          }
    }, [])

  return (
    <div id="darkmode-toggle-switch" className="btn-toggle-switch">
    <span className="label"> Dark Mode</span>

    <label htmlFor="darkmode-switch" className="toggle-switch">

        <input 
          id="darkmode-switch" 
          type="checkbox" 
          checked={isDarkmode} 
          onChange={toggleDarkmode} 
          />

        <span className="slider round"></span>
    </label>
 </div>
  )
}

export default DarkmodeSwitch


