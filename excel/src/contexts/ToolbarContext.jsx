import { createContext, useState } from 'react';
import useDropdown from '../hooks/useDropdown';
import { IoIosGitBranch } from 'react-icons/io';


export const ToolbarContext = createContext(null);

const ToolbarProvider = ({ children }) => {
  const [isFontSizeDropdownOpen, setIsFontSizeDropdownOpen] = useState(false);
  const [fontSizeValue, setFontSizeValue] = useState(11);
  const [isColorDropDown, setIscolorDropDown, toggleColor] = useDropdown(false)
  const [isBgColorDropDown, setIsBgColorDropDown,toggleBgColor] = useDropdown(false);
  const [bgColorValue, setBgColorValue]= useState({ name: "white", bg: "bg-white", text: "text-white" });
  const [colorValue, setColorValue] = useState({ name: "black", bg: "bg-black", text: "text-black" })

  const toggleFontSizeDropdown = () => {
    setIsFontSizeDropdownOpen((prevOpen) => !prevOpen);
  };


  return (
    <ToolbarContext.Provider
      value={{
        isFontSizeDropdownOpen,
        toggleFontSizeDropdown,
        fontSizeValue,
        colorValue,
        setFontSizeValue,
        isColorDropDown,
        setColorValue,
        toggleColor,
        isBgColorDropDown,
        toggleBgColor,
        bgColorValue,
        setBgColorValue
      }}
    >
      {children}
    </ToolbarContext.Provider>
  );
};

export default ToolbarProvider;
