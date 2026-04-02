import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../services/api'

const Signup = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      return "All fields are required"
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return "Invalid email format"
    }

    if (formData.password.length < 6) {
      return "Password must be at least 6 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match"
    }

    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")
    setSuccess("")

    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    try {
      setLoading(true)

      const res = await API("/user/signup", "POST", {
        name: formData.name,
        email: formData.email,
        password: formData.password
      })

      setSuccess(res?.message || "Account created successfully")
      console.log(res?.token)
      // optional: auto login token
      if (res?.data?.token) {
        localStorage.setItem("token", res.data.token)
        
      }

      // redirect after signup
      setTimeout(() => {
        navigate("/login")
      }, 1000)

    } catch (err) {
      setError(err.response?.data?.message || "Signup failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-screen h-screen bg-slate-100 flex justify-center items-center'>

      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-2xl shadow-lg w-[350px] flex flex-col gap-4'>

        <h1 className='text-2xl font-bold text-center'>
          Create Account
        </h1>

        {error && <p className='text-red-500 text-sm'>{error}</p>}
        {success && <p className='text-green-600 text-sm'>{success}</p>}

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Full Name'
          className='border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500'
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
          className='border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500'
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder='Password'
          className='border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500'
        />

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder='Confirm Password'
          className='border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500'
        />

        <button
          disabled={loading}
          className='bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50'
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <p className='text-sm text-center'>
          Already have an account?
          <Link to="/login">
            <span className='text-blue-600 ml-1 hover:underline'>
              Login
            </span>
          </Link>
        </p>

      </form>
    </div>
  )
}

export default Signup