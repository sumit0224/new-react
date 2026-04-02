import React from 'react'
import { Outlet } from 'react-router-dom'
import './layout.css'

const Layout = () => {
  return (
    <div id='main' className='w-screen h-screen bg-yellow-200 flex justify-center items-center'>
      {/* <div id='nav'></div>
      <div id='aside'></div>
      <div id='hero'></div>
      <div id='section'></div> */}
      <h1 className='heading text-[400px] font-bold'>India</h1>
      
      
    </div>
  )
}

export default Layout
