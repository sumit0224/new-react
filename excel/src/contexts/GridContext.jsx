import { createContext, useContext, useMemo, useState } from 'react';
import { SheetContext } from './SheetContext';

export const GridContext = createContext(null);

const GridProvider = ({ children }) => {
  const { activeSheetData, updateCellValue, updateCellStyle } = useContext(SheetContext);

  const [selectedCell, setSelectedCell] = useState({
    rowIndex: 0,
    colIndex: 0,
    colLabel: 'A',
  });

  const value = useMemo(
    () => ({
      data: activeSheetData,
      updateCellValue,
      updateCellStyle,
      selectedCell,
      setSelectedCell,
      rowCount: activeSheetData.length,
      colCount: activeSheetData[0]?.length || 0,
    }),
    [activeSheetData, updateCellValue, updateCellStyle, selectedCell]
  );

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};

export default GridProvider;
