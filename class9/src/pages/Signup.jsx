import React, { useEffect, useState } from 'react'


const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
 const [user, setUser] = useState(() => {
    try {
      const data = localStorage.getItem("Users");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });


  const confirmPass = (formData) => {
    if (formData.password !== formData.confirmPassword) {
      return "password does't match"
    }
  }


  const submitHandler = (e) => {
    e.preventDefault();
    confirmPass(formData);

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    }
    setUser([...user, newUser])

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    })


  }


  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(user))
  }, [user])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={submitHandler} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4">

        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            name='name'
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            name='email'
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={handleChange}
            name='password'
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            name='confirmPassword'
            placeholder="Re-enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>

      </form>


    </div>
  )
}

export default Signup
