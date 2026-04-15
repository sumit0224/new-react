import { createContext, useMemo, useState, useCallback } from 'react';

export const SheetContext = createContext(null);

export const SheetProvider = ({ children }) => {
  const [sheets, setSheets] = useState(['Sheet1']);
  const [activeSheet, setActiveSheet] = useState('Sheet1');

  const addSheet = useCallback(() => {
    setSheets(prev => [...prev, `Sheet${prev.length + 1}`]);
  }, []);

  const deleteSheet = useCallback((index) => {
    setSheets(prev => prev.filter((_, i) => i !== index));
  }, []);

  const value = useMemo(() => ({
    sheets,
    activeSheet,
    setActiveSheet,
    addSheet,
    deleteSheet,
  }), [sheets, activeSheet]);

  return (
    <SheetContext.Provider value={value}>
      {children}
    </SheetContext.Provider>
  );
};