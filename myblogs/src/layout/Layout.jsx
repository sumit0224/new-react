import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div>
      <Navbar/>
      <main className='py-[64px]'>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout
