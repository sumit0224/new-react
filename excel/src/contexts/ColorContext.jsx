import { createContext, useMemo, useState } from 'react';
import useDropdown from '../hooks/useDropdown';

export const ColorContext = createContext(null);

export const ColorProvider = ({ children }) => {
  const [isColorDropDown, , toggleColor] = useDropdown(false);
  const [isBgColorDropDown, , toggleBgColor] = useDropdown(false);

  const [bgColorValue, setBgColorValue] = useState({
    name: "white",
    bg: "bg-white",
    text: "text-white"
  });

  const [colorValue, setColorValue] = useState({
    name: "black",
    bg: "bg-black",
    text: "text-black"
  });

  const value = useMemo(() => ({
    isColorDropDown,
    toggleColor,
    colorValue,
    setColorValue,

    isBgColorDropDown,
    toggleBgColor,
    bgColorValue,
    setBgColorValue,
  }), [isColorDropDown, isBgColorDropDown, colorValue, bgColorValue]);

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
};