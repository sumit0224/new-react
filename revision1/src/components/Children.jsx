import React from 'react'

const Children = ({children}) => {
  return (
    <div className='w-screen h-screen bg-red-200 '>
        <h1>good morning guys</h1>
        <p>this is your revision class</p>
        <div>
          {children}
        </div>
      
    </div>
  )
}

export default Children
