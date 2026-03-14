// import React, { useState } from 'react'
// import './App.css'

// const App = () => {
//   const [value, setValue]=useState(false) 
//   let data = value? "profile": "login"
//   const [state, setState] = useState(data)

//   function ChangeState(){
//     setValue(!value)
//   }
//   return (
//     <>
//       <div className='navbar'>
//         <div className="logo">
//           Logo
//         </div>
//         <div className="links">
//           <a href="">Home</a>
//           <a href="">About us</a>
//           <a href="">Contact</a>
//         </div>
//         <div className="login" onClick={ChangeState} >{state}</div>
        


//       </div>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const data = ["mobile", "laptop", "tablet"]
//   const [value, setValue]= useState(null)
//   const [loding, setLoding] = useState(false)

//   const getData =()=>{
//     setLoding(true)
//     if(loding){
//       console.log("condition run ")
//       setTimeout(() => {
//         setValue(data)
//         setLoding(false)
//         console.log(value)
//       },0);
//     }
//   }

//   return (
//     <div>
//       <button onClick={getData} >Get-Data</button>
//    {  loding&&  <p>Loding......</p>}
//       {
//        value && data.map((item, index)=>{
//           return <h2 key={index}>{item}</h2>
//         })
//       }
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const [value, setValue] = useState("react")
  return (
    <div>
      <form action="" onSubmit={(e)=>{
        e.preventDefault()
      }}>
        <input value={value} type="text" name="" id="" onChange={(e)=>{
          setValue(e.target.value)
        }} />
      <button>submit</button>
      </form>
      
    </div>
  )
}

export default App
