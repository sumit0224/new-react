import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import LeftAside from '../components/LeftAside'
import RightAside from '../components/RightAside'
import BlogCard from '../components/BlogCard'
import { articles } from '../assets/assets'
import { HiOutlinePencilAlt } from "react-icons/hi";

const Home = () => {
  const categories = ["All", "Technology", "AI", "Design", "Lifestyle"];
  const [active, setActive] = useState("All");

  const filteredArticles =
    active === "All"
      ? articles
      : articles.filter((a) =>
          a.category.toLowerCase().includes(active.toLowerCase())
        );

  return (
    <div className='min-h-screen bg-[#fdfdfd]'>
      <Navbar />

      <div className='flex justify-center pt-24 pb-12'>
        <div className='flex w-full max-w-7xl px-4 md:px-8 gap-8'>

          {/* Left Sidebar */}
          <div className='hidden xl:block w-64 shrink-0'>
            <LeftAside />
          </div>

          {/* Main Content */}
          <main className='flex-1'>
            {/* Category Sub-header */}
            <div className='flex items-center justify-between mb-8 border-b border-zinc-100 pb-4'>
              <div className='flex gap-2 p-1 bg-zinc-100/50 rounded-2xl'>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 
                      ${
                        active === cat
                          ? "bg-white text-indigo-600 shadow-sm"
                          : "text-zinc-500 hover:text-zinc-800"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog List Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {filteredArticles.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </main>

          {/* Right Sidebar */}
          <div className='hidden lg:block w-80 shrink-0'>
            <RightAside />
          </div>
        </div>
      </div>

      {/* Premium FAB */}
      <button 
        onClick={() => window.location.href = '/article/write'}
        className='fixed bottom-8 right-8 flex items-center gap-2 p-4 px-6 bg-indigo-600 text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(99,102,241,0.4)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.6)] hover:-translate-y-1 active:scale-95 transition-all duration-300 z-50 group'
      >
        <div className='bg-white/20 p-1 rounded-lg group-hover:rotate-12 transition-transform'>
          <HiOutlinePencilAlt className='text-xl' />
        </div>
        <span className='tracking-tight'>Compose</span>
      </button>
    </div>
  )
}

export default Home