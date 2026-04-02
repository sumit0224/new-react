import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../services/api'

const Login = () => {

  const [message, setMessage] = useState(null)
  const [check, setCheck] = useState(false)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await API("/user/login", "POST", formData)

      const msg = res?.message || "Login successful"
      setMessage(msg)

      // ✅ Save if remember checked
      if (check) {
        localStorage.setItem("formData", JSON.stringify(formData))
      } else {
        localStorage.removeItem("formData")
      }

      console.log(res.token)
      // ✅ Save token (if backend gives)
      if (res?.token) {
        localStorage.setItem("token", res.token)
      }

      // ✅ Redirect
      navigate("/")

    } catch (error) {
      const errMsg =
        error.response?.message || "Login failed"
      setMessage(errMsg)
    }
  }

  useEffect(() => {
    const data = localStorage.getItem("formData")
    if (data) {
      setFormData(JSON.parse(data))
      setCheck(true)
    }
  }, [])

  return (
    <div className='w-screen h-screen bg-slate-100 flex justify-center items-center'>

      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-2xl shadow-lg w-[350px] flex flex-col gap-4'>

        <h1 className='text-2xl font-bold text-center mb-2'>
          Welcome Back
        </h1>

        {message && (
          <p className='text-center text-sm text-red-500'>
            {message}
          </p>
        )}

        {/* Email */}
        <div className='flex flex-col gap-1'>
          <label className='text-sm font-medium'>Email</label>
          <input
            type="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            required
            className='border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* Password */}
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between items-center'>
            <label className='text-sm font-medium'>Password</label>
            <span className='text-xs text-blue-600 cursor-pointer hover:underline'>
              Forgot?
            </span>
          </div>

          <input
            type="password"
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter your password'
            required
            className='border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* Remember */}
        <div className='flex items-center gap-2 text-sm'>
          <input
            type="checkbox"
            checked={check}
            onChange={(e) => setCheck(e.target.checked)}
            className='accent-blue-500'
          />
          <span>Remember my session</span>
        </div>

        {/* Button */}
        <button className='bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'>
          Sign In
        </button>

        {/* Footer */}
        <p className='text-sm text-center'>
          New here?
          <Link to="/signup">
            <span className='text-blue-600 hover:underline ml-1'>
              Sign-Up
            </span>
          </Link>
        </p>

      </form>
    </div>
  )
}

export default Login