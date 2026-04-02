import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";

const RightAside = () => {
  const Topics = [
    {
      id: 1,
      heading: "Machine Learning",
      subheading: "Understanding the LLM architecture shift in 2024"
    },
    {
      id: 2,
      heading: "AI",
      subheading: "How GPT models are evolving rapidly"
    },
    {
      id: 3,
      heading: "Web Development",
      subheading: "React vs Next.js in 2025"
    }
  ];

  return (
    <div className='w-1/4 h-[calc(100vh-64px)] p-3 flex flex-col gap-3 sticky top-[64px]'>

      
      <div className='flex items-center gap-3 uppercase'>
        <FaArrowTrendUp size={18}/>
        <span className='text-sm'>Trending Topics</span>
      </div>

    
      <div className='flex flex-col gap-4'>
        {Topics.map((item, index) => (
          <div key={item.id} className='flex flex-col gap-1 cursor-pointer'>
            
            <p className='text-zinc-500 text-sm'>
              {index + 1}. {item.heading}
            </p>

            <h1 className='font-medium '>
              {item.subheading}
            </h1>

          </div>
        ))}
      </div>

      {/* Footer */}
      <div className='text-blue-700 font-semibold mt-2 cursor-pointer hover:underline'>
        View all trending
      </div>

    </div>
  )
}

export default RightAside