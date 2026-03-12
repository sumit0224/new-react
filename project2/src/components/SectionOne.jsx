import React from 'react'
import Circle from './Circle'

const SectionOne = () => {
    let list = ["deepanshu", "abhinav", "vanshika", "neha", "sumit"]
  return (
    <>
      <div className='w-full p-7  '>
        <div className='flex justify-between items-center'>
            <h1 className='text-4xl w-[500px]'>Focus on Quality, <span className='text-zinc-400'>we maintain customer trust
                </span></h1>
            <p className='text-sm text-zinc-400 w-[500px]'>
                we ensure the every installation Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ipsa magnam quaerat aperiam inventore veniam cum quod sapiente
            </p>
        </div>
        <div className='flex justify-evenly items-center  py-10'>
           {list.map((items, index)=>{
                return <Circle key={index} title={items} />
           })}
        </div>
      </div>
    </>
  )
}

export default SectionOne
