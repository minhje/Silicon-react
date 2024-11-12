import React, { createContext, useState, useEffect, useContext } from 'react'

const DarkmodeContext = createContext()

export const DarkmodeProvider = ({ children }) => {
    const [isDarkmode, setIsDarkmode] = useState(false)

    const toggleDarkmode = () => {
        const newMode = !isDarkmode
        setIsDarkmode(newMode)

        if (newMode) {
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light')
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
    <DarkmodeContext.Provider value={{ isDarkmode, toggleDarkmode }}>
        {children}
        </DarkmodeContext.Provider>
  )
}

export const useDarkmode = () => { return useContext(DarkmodeContext) }