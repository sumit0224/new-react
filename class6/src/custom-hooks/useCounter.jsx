import React, { useState } from 'react'

const useCounter = (value) => {
  let [ count , setCount] = useState(value) 
    const Plus = ()=>{
        setCount(count+1)
        console.log(count)
    }
    const minus = ()=>{
        setCount(count-1)

    }
    const reset = ()=>{
        setCount(value)
    }
    
 return {Plus, minus ,count, reset}
}

export default useCounter
