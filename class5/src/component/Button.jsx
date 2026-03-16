import React, { useState } from 'react'

const Button = ({ name="deepanshu", bgcolor, text, hoverBg }) => {

  const [bg, setBg] = useState(bgcolor)

  return (
    <>
      <button
        style={{
          backgroundColor: bg,
          color: text,
          padding: "10px 20px",
          border: "none",
          cursor: "pointer"
        }}
        onMouseEnter={() => setBg(hoverBg)}
        onMouseLeave={() => setBg(bgcolor)}
      >
        {name}
      </button>
    </>
  )
}

export default Button