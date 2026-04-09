// import React, { useEffect, useState } from 'react'
// import Cards from './components/Cards'

// const App = () => {
//   const [inp, setInp] = useState("")
//   useEffect(()=>{
//     console.log("rerender")
//   }, [inp])
//   return (
//     <div>
//       <Cards name={"react"}/>
//       <input type="text" className='border-2 ' name="" id="" value={inp} onChange={(e)=> setInp(e.target.value)} />
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import Counter from './components/Counter'

// const App = () => {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   )
// }

// export default App



import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'


const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Admin = lazy(() => import("./pages/Admin"))


const App = () => {

  return (

    <div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Suspense>

    </div>
  )
}

export default App

