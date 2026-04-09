import React, { useState } from 'react'
import { FaRegCommentAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import { FaRegShareSquare } from "react-icons/fa";
import { PiPlugsConnectedLight } from "react-icons/pi";

const Navbar2 = () => {

    const tabs = ["File", "Home", "Insert", "Share", "Page Layout", "Formulas", "Data", "Review", "Help", "Draw"]

    const [activeTab, setActiveTab] = useState("Home")

    return (
        <div className='w-full flex justify-between items-center bg-[#f3f2f1] border-b border-[#e1dfdd]'>

            {/* LEFT TABS */}
            <div className="flex items-center px-3 text-[13px]">

                {tabs.map((tab) => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
                            px-3 py-2 cursor-pointer relative
                            transition-all duration-150
                            ${activeTab === tab
                                ? "text-black font-medium"
                                : "text-[#605e5c] hover:text-black"
                            }
                        `}
                    >
                        {tab}

                        {/* ACTIVE UNDERLINE */}
                        {activeTab === tab && (
                            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#217346]"></div>
                        )}
                    </div>
                ))}

            </div>

            {/* RIGHT CONTROLS */}
            <div className='flex items-center gap-1 px-1 text-[11px] text-[#605e5c]'>

                <div className='flex items-center gap-1 cursor-pointer bg-white hover:bg-[#edebe9] px-2  py-[2px] rounded'>
                    <FaRegCommentAlt />
                    <span>Comments</span>
                    <RiArrowDropDownLine className='text-[18px]' />
                </div>

                <div className='flex items-center gap-1 cursor-pointer bg-white hover:bg-[#edebe9] px-2  py-[2px] rounded'>
                    <PiPlugsConnectedLight />
                    <span>Catch Up</span>
                    <RiArrowDropDownLine className='text-[18px]' />
                </div>

                <div className='flex items-center gap-1 cursor- bg-white hover:bg-[#edebe9] px-2 py-[2px] rounded'>
                    <LuPencil />
                    <span>Editing</span>
                    <RiArrowDropDownLine className='text-[18px]' />
                </div>

                <div className='flex items-center gap-1 cursor-pointer bg-green-700 text-white  px-2 py-[2px] rounded'>
                    <FaRegShareSquare />
                    <span>Share</span>
                    <RiArrowDropDownLine className='text-[18px]' />
                </div>

            </div>
        </div>
    )
}

export default Navbar2