import React, { useEffect, useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { HiOutlineBell, HiOutlinePlusCircle } from "react-icons/hi2";
import { RiUserSharedLine, RiLoginBoxLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const [links, setLinks] = useState([
        { id: 1, name: "Explore", path: "/", active: true },
        { id: 2, name: "Latest", path: "/trending", active: false },
        { id: 3, name: "Topics", path: "/", active: false }
    ])
    
    const handleActive = (id)=>{
        let updateActive = links.map((items)=>{
            return items.id === id ? {...items, active: true} : {...items,  active: false}
        })
        setLinks(updateActive)
    }

    return (
        <div className='w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] h-16 glass fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center px-6 md:px-10 rounded-2xl shadow-lg'>
            <div className="flex items-center gap-6 md:gap-12">
                <Link to="/" className='text-2xl font-bold brand-font tracking-tighter cursor-pointer premium-gradient'>
                    Curator
                </Link>

                <div className='hidden lg:flex gap-10 text-[13px] font-bold uppercase tracking-widest text-zinc-400'>
                    {
                        links.map((items) => {
                            return (
                                <Link 
                                    to={items.path}
                                    key={items.id} 
                                    onClick={()=> handleActive(items.id)} 
                                    className={`relative cursor-pointer py-1 transition-all duration-300 hover:text-indigo-500 ${items.active ? 'text-indigo-600' : ''}`}
                                >
                                    {items.name}
                                    {items.active && (
                                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                                    )}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex items-center gap-4 md:gap-8">
                <div className='hidden sm:flex items-center bg-zinc-400/10 border border-zinc-500/10 px-4 py-1.5 rounded-2xl w-64 transition-all duration-500 focus-within:w-80 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-500/10 focus-within:border-indigo-500/30'>
                    <IoMdSearch className='text-lg text-zinc-400' />
                    <input
                        type="text"
                        placeholder='Explore insights...'
                        className='bg-transparent outline-none px-2 w-full text-sm font-semibold placeholder:text-zinc-500'
                    />
                </div>

                <div className="flex items-center gap-3 md:gap-6 text-zinc-500">
                    {user ? (
                        <>
                            <button className="hidden sm:block p-2.5 hover:bg-white/50 hover:text-indigo-600 rounded-xl transition-all relative group">
                                <HiOutlineBell className='text-xl' />
                                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-indigo-500 rounded-full border-2 border-white animate-pulse"></span>
                            </button>
                            <button 
                                onClick={() => navigate('/article/write')}
                                className="hidden sm:block p-2.5 hover:bg-white/50 hover:text-indigo-600 rounded-xl transition-all group"
                            >
                                <HiOutlinePlusCircle className='text-xl' />
                            </button>
                            <button 
                                onClick={() => navigate('/profile')}
                                className="flex items-center gap-2 p-1.5 px-3 border border-zinc-200/50 rounded-xl hover:bg-white hover:border-indigo-500/30 transition-all shadow-sm"
                            >
                                <span className='text-sm font-bold text-zinc-600'>{user.name?.split(' ')[0]}</span>
                                <div className='w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-xs uppercase'>
                                    {user.name?.[0]}
                                </div>
                            </button>
                        </>
                    ) : (
                        <button 
                            onClick={() => navigate('/login')}
                            className="flex items-center gap-2 p-2 px-5 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 transition-all shadow-md active:scale-95"
                        >
                            <RiLoginBoxLine className='text-lg' />
                            <span>Sign In</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar