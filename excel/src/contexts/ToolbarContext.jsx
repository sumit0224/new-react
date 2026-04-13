import { createContext, useState } from 'react';

export const ToolbarContext = createContext(null);

const ToolbarProvider = ({ children }) => {
  const [isFontSizeDropdownOpen, setIsFontSizeDropdownOpen] = useState(false);
  const [fontSizeValue, setFontSizeValue] = useState(11);

  const toggleFontSizeDropdown = () => {
    setIsFontSizeDropdownOpen((prevOpen) => !prevOpen);
  };

  return (
    <ToolbarContext.Provider
      value={{
        isFontSizeDropdownOpen,
        toggleFontSizeDropdown,
        fontSizeValue,
        setFontSizeValue,
      }}
    >
      {children}
    </ToolbarContext.Provider>
  );
};

export default ToolbarProvider;
