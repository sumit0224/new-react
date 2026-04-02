import React from 'react'
import { Link } from 'react-router-dom';

import { btn } from '../assets/assets';

const LeftAside = () => {

  return (
    <div className='w-1/5 h-[calc(100vh-64px)] p-3 sticky top-[64px]'>
      {btn.map((item) => {
        const Icon = item.icon;

        return (
          <Link key={item.id} to={item.link}>
            <div className='flex gap-3 items-center px-3 py-2 hover:bg-slate-300 rounded-md cursor-pointer'>
              <Icon size={20} />
              <span>{item.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  )
}

export default LeftAside