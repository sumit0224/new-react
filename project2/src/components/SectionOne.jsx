import React from 'react'
import Circle from './Circle'

const SectionOne = () => {

  const list = ["deepanshu", "abhinav", "vanshika", "neha", "sumit"]

  return (
    <div className="w-full px-7 py-16">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        <h1 className="text-4xl max-w-[500px]">
          Focus on Quality,
          <span className="text-zinc-400">
            {" "}we maintain customer trust
          </span>
        </h1>

        <p className="text-sm text-zinc-400 max-w-[500px]">
          We ensure every installation Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate, ipsa magnam
          quaerat aperiam inventore veniam.
        </p>

      </div>

      {/* CIRCLES */}
      <div className="flex flex-wrap justify-center gap-8 py-10">

        {list.map((item) => (
          <Circle key={item} title={item} />
        ))}

      </div>

    </div>
  )
}

export default SectionOne