// import React, { useState } from 'react'
// import useCounter from './custom-hooks/useCounter'

// const App = () => {
//   const {Plus, minus, count, reset} = useCounter(0)

//   const [value, setValue] = useState(0)

//   const inc = ()=>{
//     setValue(value+1)
//   }
//   const dec = ()=>{
//     setValue(value+1)
//   }

//   return (
//     <div className="w-screen h-screen bg-zinc-700 text-white flex justify-center items-center">

//       <div className="w-80 p-6 flex flex-col gap-5 bg-white text-black rounded-2xl shadow-lg items-center">

//         <h1 className="text-2xl font-bold">
//           Counter: {count}
//         </h1>

//         <div className="flex gap-3">
//           <button 
//             onClick={Plus}
//             className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
//           >
//             Plus
//           </button>

//           <button 
//             onClick={minus}
//             className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//           >
//             Minus
//           </button>

//           <button 
//             onClick={reset}
//             className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
//           >
//             Reset
//           </button>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default App

// {/* custom hooks 
//       react-router-dom
//       router step
//       create-route
//       nested route
//       proctative route
//       dynmice route
//       hoc
//       */}


import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Link, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import useFetch from './custom-hooks/useFetch'

const App = () => {
  const {data, error} = useFetch("http")
  return (

    <div>
      <div className='w-full h-20 flex justify-center items-center gap-6 bg-blue-400 '>
        <Link to={"/"}> <div>Home</div></Link>
        <Link to={"/about"}> <div>About</div></Link>
        <Link to={"/contact"} ><div>Contact</div></Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound/>}  />
        <Route path='/profile/:username' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
