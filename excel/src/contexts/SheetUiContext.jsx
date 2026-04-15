import { createContext, useMemo, useState } from 'react';

export const SheetUIContext = createContext(null);

export const SheetUIProvider = ({ children }) => {
  const [editingSheetIndex, setEditingSheetIndex] = useState(null);
  const [isSheetMenuOpen, setIsSheetMenuOpen] = useState(false);

  const value = useMemo(() => ({
    editingSheetIndex,
    setEditingSheetIndex,
    isSheetMenuOpen,
    setIsSheetMenuOpen,
  }), [editingSheetIndex, isSheetMenuOpen]);

  return (
    <SheetUIContext.Provider value={value}>
      {children}
    </SheetUIContext.Provider>
  );
};