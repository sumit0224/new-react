import React, { createContext, useState } from 'react'

export const globalContext = createContext()

const GlobalContext = ({ children }) => {
    const [activeTab, setActiveTab] = useState("Home")
    const [dropDown, setDropDown] = useState(false)

    const [sheets, setSheets] = useState(["Sheet1"])
    const [active, setActive] = useState("Sheet1")
    const [editing, setEditing] = useState(null)
    const [dropUp, setDropUp] = useState(false)

    return (
        <globalContext.Provider 
            value={{
                activeTab, setActiveTab,
                dropDown, setDropDown,
                sheets, setSheets,
                active, setActive,
                editing, setEditing,
                dropUp, setDropUp
            }}
        >
            {children}
        </globalContext.Provider>
    )
}

export default GlobalContext