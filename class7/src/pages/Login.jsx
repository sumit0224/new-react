import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }

    const authUser = (data) => {
        let users = JSON.parse(localStorage.getItem("user")) || [];

        let existedUser = users.find((item) => item.username === data.username);

        if (!existedUser) {
            return alert("Please register first");
        }

        if (data.password !== existedUser.password) {
            return alert("Invalid password");
        }
        localStorage.setItem("login", true)
        navigate("/dashboard");
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        authUser(formData)
        
        setFormData({
            username: "",
            password: ""
        })

    }

    

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-gray-100'>

            <div className='w-full max-w-md bg-teal-500 flex flex-col justify-center items-center gap-7 px-6 py-6 rounded-xl shadow-lg'>

                <h1 className='text-white text-2xl font-semibold'>LOGIN</h1>

                <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>

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
                        />
                    </div>

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
                        />
                    </div>

                    <button
                        type="submit"
                        className='w-full bg-teal-900 text-white py-3 rounded-lg hover:bg-teal-800 transition'
                    >
                        Submit
                    </button>

                </form>
            </div>

        </div>
    )
}

export default Login