import React, {  createContext , useState} from 'react'

export const gridContext = createContext()


const GridProvider = ({ children }) => {

    const [selectedCell, setSelectedCell] = useState({
        row: null,
        col: null,
        colIndex: null  
    })


    const row = 30
    const col = 26
    const [data, setData] = useState(
        Array.from({ length: row }, () =>
            Array.from({ length: col }, () => "")
        )
    )

    const handleChange = (rowIndex, colIndex, value) => {
        const newData = data.map((r, rIdx) =>
            r.map((cell, cIdx) =>
                rIdx === rowIndex && cIdx === colIndex ? value : cell
            )
        )
        setData(newData)
    }
    return (
        <gridContext.Provider value={{data, setData, handleChange, row, col, selectedCell, setSelectedCell}}>
            {children}
        </gridContext.Provider>)
}

export default GridProvider
