import React from 'react'
import Card from './components/Card'
import Children from './components/Children'
import Useeffect from './components/Useeffect'
import { Route, Routes } from 'react-router-dom'
import NestedRoute from './components/NestedRoute'

const App = () => {
  return (


    <>
      {/* <Card bgcolor={"red"} content={"hello deepanshu"}/> 
      <Card bgcolor={"green"} text={"100px"} content={"hello vanshika"}/>
      <Card bgcolor={"green"} text={""} content={"hello neha"}/>
      <Card bgcolor={"green"} text={""} /> */}

      {/* <Children>
        <p>1. props</p>
        <p>2. children</p>
        <Card bgcolor={"yellow"}/>
      </Children> */}
      {/* <Useeffect/>
       */}


       <Routes>
        <Route path='/setting' element={<NestedRoute/>}>
          <Route path='profile' element={<h1> profile h nested wali</h1>}/>
        </Route>
        
       </Routes>

    </>
  )
}

export default App
