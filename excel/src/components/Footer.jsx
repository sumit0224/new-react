import React, { useContext} from 'react'
import { TbMathGreater } from "react-icons/tb";
import { FaLessThan, FaPlus } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { globalContext } from '../context/GlobalContext';


const Footer = () => {
    const {
        sheets,
        setSheets,
        active,
        setActive,
        editing,
        setEditing,
        dropUp,
        setDropUp
    } = useContext(globalContext)

    const addSheet = () => {
        const newSheet = `Sheet${sheets.length + 1}`
        setSheets([...sheets, newSheet])
        setActive(newSheet)
    }


    const handleChange = (e, index) => {
        const updated = [...sheets]
        updated[index] = e.target.value
        setSheets(updated)
    }

    return (
        <div className='fixed bottom-0 left-0 w-full h-[36px] bg-[#f3f2f1] border-t border-[#e1dfdd] flex items-center px-2 text-[13px]'>

            {/* LEFT CONTROLS */}
            <div className='flex items-center gap-2 text-[#605e5c] text-lg'>
                <FaLessThan className='cursor-pointer hover:bg-[#edebe9] p-1 rounded' />
                <TbMathGreater className='cursor-pointer hover:bg-[#edebe9] p-1 rounded' />
                <RxHamburgerMenu onClick={() => setDropUp(!dropUp)} className='cursor-pointer hover:bg-[#edebe9] p-1 rounded' />
            </div>
            {
                dropUp && (
                    <div className='w-[160px] absolute left-8 bottom-10 bg-[#f3f2f1] rounded-lg shadow-lg max-h-[150px] overflow-y-auto px-2 py-2'>

                        {sheets.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setActive(item)
                                    setDropUp(false)
                                }}
                                className={`px-3 py-1 rounded cursor-pointer text-sm
                    ${active === item
                                        ? "bg-[#217346] text-white"
                                        : "hover:bg-[#edebe9]"
                                    }`}
                            >
                                {item}
                            </div>
                        ))}

                    </div>
                )
            }
            {/* SHEETS */}
            <div className='flex items-center gap-1 ml-3'>

                {sheets.map((item, index) => (
                    <input
                        key={index}
                        value={item}
                        readOnly={editing !== index}
                        onClick={() => setActive(item)}
                        onDoubleClick={() => setEditing(index)}
                        onBlur={() => setEditing(null)}
                        onChange={(e) => handleChange(e, index)}
                        className={`px-4 w-[100px] py-1 border rounded-t outline-none
                        ${active === item
                                ? "bg-white text-black border-[#e1dfdd]"
                                : "bg-[#f3f2f1] text-[#605e5c] border-transparent"
                            }`}
                    />
                ))}

                {/* ADD BUTTON */}
                <div
                    onClick={addSheet}
                    className='flex items-center justify-center w-7 h-7 cursor-pointer hover:bg-[#edebe9] rounded'
                >
                    <FaPlus />
                </div>

            </div>

            <div></div>
        </div>
    )
}

export default Footer