



import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
   let navigate = useNavigate()

  const [user] = useState(() => {
    try {
      const data = localStorage.getItem("Users");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // ✅ Empty validation
    if (!email || !password) {
      setIsError(true);
      return setMessage("All fields are required");
    }

    const existingUser = user.find(u => u.email === email);

    // ✅ User not found
    if (!existingUser) {
      setIsError(true);
      return setMessage("Please register first");
    }

    // ✅ Password mismatch
    if (existingUser.password !== password) {
      setIsError(true);
      return setMessage("Invalid email or password");
    }

    // ✅ Success
    localStorage.setItem("Auth", JSON.stringify(existingUser));
    setIsError(false);
    setMessage("Login successful ✅");
        navigate("/")

    // ✅ Reset form
    setFormData({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={submitHandler} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-5">

        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login
        </h2>

        {/* ✅ Message UI */}
        {message && (
          <p className={`text-sm text-center font-medium ${isError ? "text-red-500" : "text-green-500"}`}>
            {message}
          </p>
        )}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>

      </form>
    </div>
  );
};

export default Login;