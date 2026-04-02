import React from 'react'
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const slug = blog.title.toLowerCase().replace(/\s+/g, '-')
  
  return (
    <div className='group w-full flex flex-col gap-4 p-4 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 hover-lift'>
      
      {/* Cover Image */}
      <div className='relative overflow-hidden rounded-2xl'>
        <img 
          src={blog.image} 
          alt={blog.title} 
          className='w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-700' 
        />
        <div className='absolute top-3 right-3 glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-indigo-600 border-indigo-200/50'>
          {blog.category}
        </div>
      </div>

      <div className='flex flex-col gap-3 px-1'>
        {/* Author Info */}
        <div className='flex gap-3 items-center'>
          <div className='p-0.5 rounded-full border border-indigo-100'>
            <img 
              src={blog.authorImg} 
              alt={blog.author} 
              className='w-6 h-6 rounded-full object-cover' 
            />
          </div>
          <div className='flex flex-col'>
            <span className='text-[11px] font-bold text-zinc-800 leading-tight'>{blog.author}</span>
            <span className='text-[10px] font-medium text-zinc-400'>{blog.date}</span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/article/${slug}`}>
          <h1 className='font-bold text-xl leading-snug brand-font text-zinc-900 group-hover:text-indigo-600 transition-colors'>
            {blog.title}
          </h1>
        </Link>

        {/* Description */}
        <p className='text-sm text-zinc-500 line-clamp-2 leading-relaxed font-medium'>
          {blog.desc}
        </p>

        {/* Footer */}
        <div className='flex justify-between items-center mt-2 pt-4 border-t border-zinc-50'>
          <div className='flex gap-4 items-center'>
            <div className='flex items-center gap-1.5 px-2 py-0.5 bg-zinc-50 rounded-lg'>
              <div className='w-1 h-1 bg-indigo-400 rounded-full animate-pulse'></div>
              <span className='text-[10px] font-bold text-zinc-500 uppercase tracking-tight'>{blog.readTime}</span>
            </div>
          </div>

          <div className='flex gap-2'>
            <button className='p-2 text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all'>
              <MdOutlineBookmarkAdd className='text-xl' />
            </button>
            <button className='p-2 text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all'>
              <IoShareSocialOutline className='text-lg' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard