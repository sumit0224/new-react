import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Setting from './pages/Setting'
import ProtectiveRoute from './routes/ProtectiveRoute'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
   
         <Route path='/dashboard' element={
          <ProtectiveRoute>
            <Dashboard/>
          </ProtectiveRoute>
         }>
          <Route path='profile' element={<Profile />}>
            <Route path='setting' element={<Setting />} />
          </Route>

        </Route>
       
      </Routes>
    </div>
  )
}

export default App