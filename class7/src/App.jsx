import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>

    </div>
  )
}

export default App


// custom hooks 
// react router dom 
// BrowserRouter -> main 
// routes  --> app.jsx 
// route --> create a endpoint

// dyanmic routing 

// nested 
// protactive
