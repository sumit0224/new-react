import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-[70px] bg-amber-50 text-lg flex justify-between items-center px-6 shadow-sm">

      {/* LOGO */}
      <div className="font-semibold text-xl">
        ❇️ Xurya
      </div>

      {/* LINKS */}
      <div className="hidden md:flex gap-6">
        <a href="#home" className="hover:text-green-500 transition">Home</a>
        <a href="#about" className="hover:text-green-500 transition">About</a>
        <a href="#features" className="hover:text-green-500 transition">Features</a>
        <a href="#services" className="hover:text-green-500 transition">Services</a>
        <a href="#contact" className="hover:text-green-500 transition">Contact</a>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3">
        <button className="py-2 px-4 bg-white rounded-3xl hover:bg-gray-100 transition">
          Login
        </button>

        <button className="py-2 px-4 bg-green-400 text-white rounded-3xl hover:bg-green-500 transition">
          Get In Touch
        </button>
      </div>

    </div>
  )
}

export default Navbar