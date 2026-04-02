import React, { useContext } from 'react'
import { themecontext } from './context/ThemeContext'

const App = () => {
    const {theme, changeTheme} = useContext(themecontext)
  let data = []

    console.log(data.reduce((acc, obj)=>{
      return acc+ obj.amount
    }, 0))
  return (
    <div>
       <h1>{theme}</h1>
       <button onClick={changeTheme}> click</button>
      
    </div>
  )
}

export default App
