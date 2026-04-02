import React, { createContext, useState } from 'react'


export const themecontext = createContext()

const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(true)
    const theme = isDark? "dark": "light"

    const changeTheme = ()=>{
        setIsDark(!isDark)
    }

  return (
    <themecontext.Provider value={{changeTheme, theme}}>
        {children}
    </themecontext.Provider>
  )
}

export default ThemeProvider
