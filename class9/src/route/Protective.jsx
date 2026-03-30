import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Protective = ({ children }) => {

  const [auth, setAuth] = useState(undefined); // 👈 important

  useEffect(() => {
    try {
      const data = localStorage.getItem("Auth");
      setAuth(data ? JSON.parse(data) : null);
    } catch {
      setAuth(null);
    }
  }, []);

  // ✅ Prevent flicker (wait until checked)
  if (auth === undefined) {
    return <div className="text-center mt-10">Checking auth...</div>;
  }

  return auth ? children : <Navigate to="/login" replace />;
};

export default Protective;