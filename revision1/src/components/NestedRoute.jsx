import React, { useEffect, useState } from 'react'
import { Link, Outlet, useAsyncError } from 'react-router-dom'

const NestedRoute = () => {
    const [hide, setHide] = useState(false)
    useEffect(()=>{
            
    }, [])
    return (
        <div>
            {
                hide ? <Outlet /> : (<>
                    <h1>setting</h1>
                    <Link to="profile" onClick={()=> setHide(!hide)} > profile</Link>
                    <Outlet />
                </>)
            }
        </div>
    )
}

export default NestedRoute
