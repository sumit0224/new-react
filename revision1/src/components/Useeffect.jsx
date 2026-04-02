import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [count, setCount] = useState(Number(localStorage.getItem("count")))

useEffect(()=>{
    localStorage.setItem("count", count)
}, [count, ])
  return (
    <div className='w-screen h-screen flex justify-center items-center ' >
      
    <div>
    <h1> counter {count}</h1>
      <button  className='px-2 py-1 bg-blue-600 text-white' onClick={()=>{
          
        setTimeout(()=>{
            setCount(count+1)
        }, 1000)
        
      }}>plus</button>
      <button className='px-2 py-1 bg-blue-600 text-white' onClick={()=>{
       
        setCount(count-1)
        }}>minus</button>
    </div>

    </div>
  )
}

export default Useeffect
