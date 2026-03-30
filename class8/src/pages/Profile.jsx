import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      Profile
     <Link to={"setting"}> <button>setting</button></Link>
      <Outlet/>
    </div>
  )
}

export default Profile