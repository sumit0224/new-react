import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Protective from './route/Protective'

const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element={
          <Protective>
            <Dashboard/>
          </Protective>
        }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>


      </Routes>
    </div>
  )
}

export default App
