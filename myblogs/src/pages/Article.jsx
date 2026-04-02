import React from 'react'
import { useParams } from 'react-router-dom'
import { articles } from '../assets/assets'

const Article = () => {

  const { title } = useParams();

  // find article by id
  const article = articles.find((item) => item.title.toLowerCase().replace(/\s+/g, '-') === title);

  // fallback (important)
  if (!article) {
    return <div className='p-10 text-xl'>Article not found</div>;
  }

  return (
    <div className='px-10 py-8 flex flex-col gap-9'>

      {/* Top Content */}
      <div className='max-w-4xl'>
        <span className='text-sm text-gray-500'>
          {article.category}
        </span> 
        {" "}•{" "}
        <span className='text-sm text-gray-500'>
          {article.readTime}
        </span>

        <h1 className='text-4xl md:text-6xl font-extrabold mt-3'>
          {article.title}
        </h1>

        <p className='text-gray-600 mt-3'>
          {article.desc}
        </p>
      </div>

      {/* Image */}
      <div>
        <img 
          src={article.image} 
          alt="" 
          className='w-full max-w-5xl h-[300px] object-cover rounded-2xl' 
        />
      </div>

    </div>
  )
}

export default Article