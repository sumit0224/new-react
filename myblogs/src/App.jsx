import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Article from './pages/Article'
import WriteArticle from './pages/WriteArticle'
import UserProfile from './pages/UserProfile'
import Protective from './route/Protective'
import Layout from './layout/Layout'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/article/:title' element={<Article />} />
        <Route path='/trending' element={<div>Trending</div>} />
        <Route path='/draft' element={<Protective><div>Draft</div></Protective>} />
        <Route path='/bookmark' element={<Protective><div>Bookmark</div></Protective>} />
        <Route path='/setting' element={<Protective><div>Setting</div></Protective>} />
        <Route path='/profile' element={
          <Protective>
            <UserProfile />
          </Protective>
        } />
      </Route>
      <Route path='/article/write' element={
        // <Protective>
          <WriteArticle />
        // </Protective>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

    </Routes>
  )
}

export default App