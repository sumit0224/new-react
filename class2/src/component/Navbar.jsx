import React from 'react'
import '../style/Navbar.css'
const Navbar = ({href, link1, link2, link3, link4}) => {

  return (
    <>
    <div className="navbar">
        <div className="logo">LOGO</div>
        <div className="links">
            <a href={href}>{link1}</a>
            <a href={href}>{link2}</a>
            <a href={href}>{link3}</a>
            <a href={href}>{link4}</a>
        </div>
    </div>
    </>
  )
}

export default Navbar
