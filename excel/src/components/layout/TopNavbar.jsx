import { PiDotsNineBold } from "react-icons/pi";
import { TiHome } from "react-icons/ti";
import { WiCloudDown } from "react-icons/wi";
import { IoIosSearch } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const TopNavbar = ({ children }) => {
    return (
        <div className=' sticky top-0 left-0 z-30 px-3 bg-[#f3f2f1] '>

           <div className=' flex justify-between items-center text-[13px] w-full h-[45px]  bg-[#f3f2f1] border-b border-[#e1dfdd]'>
             {/* LEFT */}
            <div className="flex items-center gap-2 text-[#605e5c]">
                <PiDotsNineBold className='text-[24px] cursor-pointer hover:bg-[#edebe9] p-1 rounded' />

                <TiHome className='text-[#217346] text-[20px]' />

                <span className='font-normal text-[#323130]'>File1</span>

                <WiCloudDown className='text-[18px] text-[#605e5c]' />
            </div>

            {/* CENTER (Search like Excel) */}
            <div className="flex items-center w-[320px] bg-white border border-[#e1dfdd] rounded px-2 py-[2px]">
                <IoIosSearch className='text-[#605e5c]' />
                <input
                    type="text"
                    className='w-full bg-transparent outline-none text-[13px] px-2 placeholder:text-[#a19f9d]'
                    placeholder='Search'
                />
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4 text-[#605e5c]">

                <div className='flex items-center gap-1 cursor-pointer hover:text-black'>
                    <IoDiamondOutline className='text-[16px]' />
                    <span className='text-[13px]'>Buy Microsoft 365</span>
                </div>

                <CiSettings className='text-[24px] cursor-pointer hover:bg-[#edebe9] p-1 rounded' />

                <div className='w-7 h-7 flex items-center justify-center rounded-full bg-[#217346] text-white text-[12px] font-medium'>
                    SG
                </div>
            </div>
           </div>
            <div>
                {children}
            </div>
        </div>
    )
};

export default TopNavbar;
