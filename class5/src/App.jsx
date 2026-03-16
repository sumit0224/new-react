// import React, { useState } from 'react'

// const App = () => {
//   const [value, setValue] = useState("")
//   let a = localStorage.getItem("value")
//   const [data, setData] = useState(null)
//   const handleChange = (e)=>{
//     setValue(e.target.value)
//     console.log(e.target.value)

//   }
//   const click =()=>{
//     localStorage.setItem("value", value)

//   }
//   const getValue = ()=>{
//    setData(localStorage.getItem("value"))
//   }
//   const removeValue =()=>{
//     localStorage.removeItem("value")
//   }
//   return (
//     <div>
//       <input type="text" name="" id=""  value={value}  onChange={handleChange}/>
//       <button onClick={click}>set value</button>
//       <br />
//       <button onClick={getValue}>get value</button>
//       <button onClick={removeValue}>remove</button>
//       {
//         data ? <h1>{data}</h1>: <p> no data yet!</p>
//       }

//     </div>

//   )
// }

// export default App



import React, { useEffect, useState } from 'react'
import Button from './component/Button'
import Window from './component/Window'

const App = () => {

  const [value, setValue] = useState("")


  useEffect(()=>{
    console.log("effect chala")
  }, [value])
  return (
    <div>
     
      <Window Children={"hello"}>
     <Button/>
      </Window>

    </div>
  )
}

export default App

// create project
// components create krne h 
//  dyinmice component
// props, default, chlidren
//  conditional rendering

// ?? ?. && || ? 
//  useState
//  localstorage
//  useEffect