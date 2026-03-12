import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionOne from './components/SectionOne'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className='p-4 bg-amber-50'>
        <Hero/>
      <SectionOne/>
      </div>
    </>
  )
}

export default App
