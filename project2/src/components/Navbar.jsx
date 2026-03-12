import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='w-full h-[70px]  bg-amber-50 text-lg flex justify-between items-center px-5 '>
                <div className="logo font-semibold ">
                    ❇️ Xurya
                </div>
                <div className="links flex gap-3">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Features</a>
                    <a href="">Services</a>
                    <a href="">Contact</a>
                </div>
                <div className="btn flex gap-2">
                    <button className='py-2 px-3 bg-white  outline-none rounded-3xl '>Login </button>
                    <button  className='py-2 px-3 bg-green-400 text-white  outline-none rounded-3xl '>Get In Touch</button>

                </div>
            </div>
        </>
    )
}

export default Navbar
