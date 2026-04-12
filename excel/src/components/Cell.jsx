import React, { useContext, useState } from 'react'
import { gridContext } from '../context/GridContext'

const Cell = ({ data, onChange, row, col }) => {
    const { selectedCell, setSelectedCell } = useContext(gridContext)
    const [editing, setEditing] = useState(false)

    const isSelected = selectedCell.row === row && selectedCell.colIndex === col

    return (
        <div
            className={`w-[100px] h-[30px] border overflow-hidden 
                ${isSelected ? "border-2 border-green-500" : "border-gray-300"}`}
            onClick={() => {setSelectedCell({
                row: row,
                col: String.fromCharCode(65 + col),
                colIndex: col
            })
            setEditing(true)
        }
        }
            
        >
            {editing
                ? <input
                    autoFocus
                    className='outline-none border-none w-full h-full px-1'
                    defaultValue={data}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={() => setEditing(false)}
                    type='text'
                />
                : <span className='px-1 text-sm truncate'>{data}</span>
            }
        </div>
    )
}

export default Cell
