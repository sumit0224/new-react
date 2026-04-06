import React, { useEffect, useRef } from 'react'

const App = () => {
  const inputRef = useRef();
  
  useEffect(()=>{
    inputRef.current.focus()
  }, [])

  return (
    <div className='w-screen h-screen bg-yellow-100 flex justify-center items-center'>

      <input
      
      type="text" placeholder='enter your name' className='px-2 py-1 w-[300px] h-10'/>
      <input
      ref={inputRef}
      type="text" placeholder='enter your name' className='px-2 py-1 w-[300px] h-10'/>
    </div>
  )
}

export default App
