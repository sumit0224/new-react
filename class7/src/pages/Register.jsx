import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [users, setUsers] = useState([])
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    setUsers([...users, formData])
    navigate("/login")
  }
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(users))
  }, [users])
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-100'>

      <div className='w-full max-w-md bg-teal-400 flex flex-col justify-center items-center gap-6 px-6 py-6 rounded-xl shadow-lg'>

        <h1 className='text-white text-2xl font-semibold'>REGISTER</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>

          {/* Username */}
          <div className='flex flex-col'>
            <label htmlFor="username" className='text-white'>Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder='Enter your username'
              value={formData.username}
              onChange={handleChange}
              className='px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-800'
              required
            />
          </div>

          {/* Email */}
          <div className='flex flex-col'>
            <label htmlFor="email" className='text-white'>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              className='px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-800'
              required
            />
          </div>

          {/* Password */}
          <div className='flex flex-col'>
            <label htmlFor="password" className='text-white'>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
              className='px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-800'
              required
            />
          </div>

          {/* Confirm Password */}
          <div className='flex flex-col'>
            <label htmlFor="confirmPassword" className='text-white'>Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder='Confirm your password'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-800'
              required
            />
          </div>

          <button
            type="submit"
            className='w-full bg-teal-900 text-white py-3 rounded-lg hover:bg-teal-800 transition'
          >
            Register
          </button>

        </form>
      </div>

    </div>
  )
}

export default Register