import React, { Children } from 'react'

const Window = ({children}) => {
  return (
    <div>
        <h1>window</h1>
        <div>
            {children}
        </div>
      
    </div>
  )
}

export default Window
