import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionOne from './components/SectionOne'
import Features from './components/Features'
import Services from './components/Service'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className='p-4 bg-amber-50'>
        <Hero/>
      <SectionOne/>
      </div>
        <Features/>
        <Services/>
    </>
  )
}

export default App
