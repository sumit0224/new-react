import React, { useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" })

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({ username: "", password: "" })
  }
  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value })

  }
  return (
    <div className="w-screen h-screen bg-zinc-600 flex justify-center items-center">

      <div className="w-96 bg-white p-10 rounded-2xl flex flex-col gap-5 shadow-lg">

        <h1 className="text-2xl font-bold text-center">LOGIN FORM</h1>
        <form action="" onSubmit={submitHandler}>
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="font-medium">Username</label>
            <input
              value={formData.username}
              type="text"
              id="username"
              name='username'
              onChange={handleChange}
              placeholder="Enter your username"
              className="bg-zinc-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-medium">Password</label>
            <input
              value={formData.password}
              type="password"
              id="password"
              name='password'
              onChange={handleChange}
              placeholder="Enter your password"
              className="bg-zinc-200 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="bg-blue-500 w-full mt-3 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Login
          </button>
        </form>


      </div>
    </div>
  )
}

export default Login