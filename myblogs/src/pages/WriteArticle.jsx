import React, { useState } from 'react'

const WriteArticle = () => {

  const [article, setArticle] = useState({
    title: "",
    content: "",
    category: "",
    image: ""
  })

  const [preview, setPreview] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setArticle({
      ...article,
      [name]: value
    })
  }



  const handlePublish = () => {
    if (!article.title || !article.content) {
      alert("Title and content are required")
      return
    }

    console.log("Published Article:", article)

    // reset
    setArticle({
      title: "",
      content: "",
      category: "",
      image: null
    })

    alert("Article Published 🚀")
  }

  return (
    <div className='w-screen min-h-screen bg-slate-50'>

      {/* Header */}
      <div className='w-full h-16 shadow-sm flex justify-between px-5 items-center bg-white'>
        <div className='text-2xl font-bold cursor-pointer'>
          Curator
        </div>

        <div className='flex gap-5 items-center'>
          <button
            onClick={() => setPreview(!preview)}
            className='text-gray-600 hover:text-black'
          >
            {preview ? "Edit" : "Preview"}
          </button>

          <button
            onClick={handlePublish}
            className='px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
          >
            Publish
          </button>
        </div>
      </div>

      {/* Content */}
      <div className='max-w-3xl mx-auto mt-10 p-5 bg-white rounded-xl shadow-sm'>

        {preview ? (
          <>
            <h1 className='text-3xl font-bold mb-4'>{article.title}</h1>
            <p className='text-gray-500 mb-2'>{article.category}</p>
            <p className='whitespace-pre-line'>{article.content}</p>
          </>
        ) : (
          <>
            {/* Title */}
            <input
              type="text"
              name="title"
              value={article.title}
              onChange={handleChange}
              placeholder='Article Title...'
              className='w-full text-2xl font-bold outline-none mb-4'
            />

            {/* Category */}
           <div className='flex justify-between items-center  '>
           
         
            {/* Image */}
            <input
              type="text"
              value={article.image}
              name='image'
              placeholder='enter your image url'
              onChange={handleChange}
              className='mb-4 border-[1px] px-2 border-zinc-200 rounded'
            />
              <select
              name="category"
              value={article.category}
              onChange={handleChange}
              className='mb-4 border px-3 py-1 rounded-lg'
            >
              <option value="">Select Category</option>
              <option value="Tech">Tech</option>
              <option value="AI">AI</option>
              <option value="Design">Design</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
           </div>

            {/* Content */}
            <textarea
              name="content"
              value={article.content}
              onChange={handleChange}
              placeholder='Start writing your article...'
              rows="10"
              className='w-full border rounded-lg p-3 outline-none resize-none'
            />
          </>
        )}

      </div>

    </div>
  )
}

export default WriteArticle