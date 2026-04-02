import React, { createContext, useState, useEffect, useContext } from "react";
import API from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const storedAuth = JSON.parse(localStorage.getItem("auth"));
      if (storedAuth?.token) {
        try {
          const res = await API("/user/me", "GET");
          if (res.success) {
            setUser({ ...storedAuth, ...res.user });
          } else {
            localStorage.removeItem("auth");
          }
        } catch (error) {
          localStorage.removeItem("auth");
        }
      }
      setLoading(false);
    };

    checkToken();
  }, []);

  const login = (userData) => {
    localStorage.setItem("auth", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setUser(null);
  };

  const signup = (userData) => {
    localStorage.setItem("auth", JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
