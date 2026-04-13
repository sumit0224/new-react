import { createContext, useMemo, useState } from 'react';

export const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isFileDropdownOpen, setIsFileDropdownOpen] = useState(false);
  const [sheets, setSheets] = useState(['Sheet1']);
  const [activeSheet, setActiveSheet] = useState('Sheet1');
  const [editingSheetIndex, setEditingSheetIndex] = useState(null);
  const [isSheetMenuOpen, setIsSheetMenuOpen] = useState(false);

  const value = useMemo(
    () => ({
      activeTab,
      setActiveTab,
      isFileDropdownOpen,
      setIsFileDropdownOpen,
      sheets,
      setSheets,
      activeSheet,
      setActiveSheet,
      editingSheetIndex,
      setEditingSheetIndex,
      isSheetMenuOpen,
      setIsSheetMenuOpen,
    }),
    [
      activeTab,
      isFileDropdownOpen,
      sheets,
      activeSheet,
      editingSheetIndex,
      isSheetMenuOpen,
    ],
  );

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
