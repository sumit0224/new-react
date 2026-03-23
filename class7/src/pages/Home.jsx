import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="w-screen h-screen bg-zinc-900 text-white flex flex-col justify-center items-center px-6">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to Task Manager
      </h1>

      {/* Subtitle */}
      <p className="text-zinc-400 text-center max-w-md mb-8">
        Manage your daily tasks efficiently. Stay organized and boost your productivity.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link to="/login">
          <button className="bg-teal-500 px-6 py-2 rounded-lg hover:bg-teal-600">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200">
            Register
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Home