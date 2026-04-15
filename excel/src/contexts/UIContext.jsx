import { createContext, useMemo, useState } from 'react';

export const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isFileDropdownOpen, setIsFileDropdownOpen] = useState(false);

  const value = useMemo(() => ({
    activeTab,
    setActiveTab,
    isFileDropdownOpen,
    setIsFileDropdownOpen,
  }), [activeTab, isFileDropdownOpen]);

  return (
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider>
  );
};