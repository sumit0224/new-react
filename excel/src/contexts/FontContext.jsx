import { createContext, useMemo, useState } from 'react';

export const FontContext = createContext(null);

export const FontProvider = ({ children }) => {
  const [isFontSizeDropdownOpen, setIsFontSizeDropdownOpen] = useState(false);
  const [fontSizeValue, setFontSizeValue] = useState(11);

  const toggleFontSizeDropdown = () => {
    setIsFontSizeDropdownOpen(prev => !prev);
  };

  const value = useMemo(() => ({
    isFontSizeDropdownOpen,
    toggleFontSizeDropdown,
    fontSizeValue,
    setFontSizeValue,
  }), [isFontSizeDropdownOpen, fontSizeValue]);

  return (
    <FontContext.Provider value={value}>
      {children}
    </FontContext.Provider>
  );
};