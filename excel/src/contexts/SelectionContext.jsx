import { createContext, useMemo, useState } from 'react';

export const SelectionContext = createContext(null);

export const SelectionProvider = ({ children }) => {
  const [selectedCell, setSelectedCell] = useState({
    rowIndex: 0,
    colIndex: 0,
    colLabel: 'A',
  });

  const value = useMemo(() => ({
    selectedCell,
    setSelectedCell,
  }), [selectedCell]);

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
};