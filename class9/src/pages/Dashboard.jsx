import React, { useEffect, useState } from 'react'

const Dashboard = () => {
   const [auth, setAuth] = useState(undefined); // 👈 important
   
     useEffect(() => {
       try {
         const data = localStorage.getItem("Auth");
         setAuth(data ? JSON.parse(data) : null);
       } catch {
         setAuth(null);
       }
     }, []);

  return (
    <div>
      <h1>hello {auth?.name}</h1>
    </div>
  )
}

export default Dashboard
