import React, { useContext, useState } from 'react'
import Cell from './Cell'
import { gridContext } from '../context/GridContext'

const Grid = () => {
   const {data,  handleChange, col, selectedCell} = useContext(gridContext) 

    return (
        <div className='overflow-auto h-screen w-screen'>
            <div className='inline-block'>

               
                <div className='flex sticky top-0 z-20'>
                    <div className='min-w-[50px] w-[50px] h-[30px] border sticky left-0  z-0 bg-[#dfd8d1]' />
                    {Array.from({ length: col }, (_, i) => (
                        <div key={i} className='min-w-[100px] w-[100px] h-[30px] border bg-[#f3f2f1] flex items-center justify-center text-sm font-bold'>
                            {String.fromCharCode(65 + i)}
                        </div>
                    ))}
                </div>

                {/* Rows */}
                {data.map((row, rowIndex) => (
                    <div key={rowIndex} className='flex'>

                        {/* Row Number */}
                        <div className='min-w-[50px] w-[50px] h-[30px] border sticky left-0 z-0 bg-[#f3f2f1] flex items-center justify-center text-sm font-bold'>
                            {rowIndex + 1}
                        </div>

                        {/* Cells */}
                        {row.map((cell, colIndex) => (
                            <Cell
                                
                                row={rowIndex}
                                key={colIndex}
                                col={colIndex}
                                data={cell}
                                onChange={(value) => handleChange(rowIndex, colIndex, value)}
                            />
                        ))}

                    </div>
                ))}

            </div>
        </div>
    )
}


export default Grid
