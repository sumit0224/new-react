import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const [isLogging, setIsLogging] = useState(false)

    const logoutHandle = () => {
        localStorage.removeItem("login")
        setIsLogging(false)
        navigate("/")
    }

    useEffect(() => {
        const data = localStorage.getItem("login")
        if (data) {
            setIsLogging(JSON.parse(data))
        }
    },[])

    return (
        <div className='w-full h-20 py-1 bg-teal-700 text-white flex justify-between items-center px-4 shadow-md fixed top-0'>

            <Link to="/">
                <img className='w-[180px]' src="/weborbit.png" alt="logo" />
            </Link>

            <div className='flex gap-5 items-center'>
                {isLogging ? (
                    <>
                        <Link to="/dashboard">
                            <div className='border px-3 py-2 rounded-md'>Dashboard</div>
                        </Link>

                        <button 
                            onClick={logoutHandle} 
                            className='bg-white text-teal-600 px-3 py-2 rounded-md'
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <div className='border px-3 py-2 rounded-md'>Login</div>
                        </Link>

                        <Link to="/register">
                            <div className='bg-white text-teal-600 px-3 py-2 rounded-md'>Register</div>
                        </Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar