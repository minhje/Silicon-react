import React from 'react'
import { useDarkmode } from '../Contexts/DarkmodeContext';

const DarkmodeSwitch = () => {
    const { isDarkmode, toggleDarkmode } = useDarkmode()

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


