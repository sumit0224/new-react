import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectiveRoute = ({ children }) => {
    const [auth, setAuth] = useState(null) // null = not checked yet

    useEffect(() => {
        let data = localStorage.getItem("auth")
        if (data) {
            setAuth(JSON.parse(data))
        } else {
            setAuth(false)
        }
    }, [])

    // ⏳ wait until auth is checked
    if (auth === null) {
        return <div>Loading...</div>
    }

    return auth ? children : <Navigate to="/" replace />
}

export default ProtectiveRoute