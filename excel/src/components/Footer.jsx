import React, { useState } from 'react'
import { TbMathGreater } from "react-icons/tb";
import { FaLessThan } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";

const Footer = () => {
    const [sheets, setSheets] = useState(["sheet1"])
    const addSheet = ()=>{
        setSheets([...sheets, `sheet${sheets.length + 1}`])
    }
    const changeName = (items)=>{
        console.log(items)
    }
    return (
        <div className='absolute bottom-0 left-0 w-full h-[36px] bg-[#f3f2f1] border-t border-[#e1dfdd] flex items-center  px-2 text-[13px]'>

            {/* LEFT CONTROLS */}
            <div className='flex items-center gap-2 text-[#605e5c] text-lg'>
                <FaLessThan className='cursor-pointer hover:bg-[#edebe9] p-1 rounded' />
                <TbMathGreater className='cursor-pointer hover:bg-[#edebe9] p-1 rounded' />
                <RxHamburgerMenu className='cursor-pointer hover:bg-[#edebe9] p-1 rounded' />
            </div>

            {/* SHEET TABS */}
            <div className='flex items-center gap-1 ml-3'>

                {/* ACTIVE SHEET */}
                {
                    sheets.map((items, index) => {
                      return <>
                        <div key={index} onClick={()=> changeName(items)} className='relative px-4 py-1 bg-white border border-[#e1dfdd] rounded-t cursor-pointer text-black'>
                            {items}
                            <div className='absolute bottom-0 left-0 w-full h-[2px] bg-[#217346]'></div>
                        </div></>
                    })
                }

                {/* ADD NEW SHEET */}
                <div onClick={addSheet} className='flex items-center justify-center w-7 h-7 cursor-pointer hover:bg-[#edebe9] rounded'>
                    <FaPlus  />
                </div>

            </div>

            {/* RIGHT (EMPTY / FUTURE ZOOM CONTROLS) */}
            <div></div>

        </div>
    )
}

export default Footer