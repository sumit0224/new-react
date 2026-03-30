import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex gap-5 flex-col'>Dashboard

      <Link to={"profile"}>
        <button className='bg-blue-300 px-2 py-1 rounded-lg w-28'>
          profile
        </button>
      </Link>
      <Link to={"setting"} >
        <button className='bg-blue-300 px-2 py-1 rounded-lg w-28' >
          setting
        </button>
      </Link>
      <div className='bg-red-300'>

      <Outlet />
      </div>
    </div>
  )
}

export default Dashboard