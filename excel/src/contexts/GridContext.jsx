import { createContext, useCallback, useMemo, useState } from 'react';

export const GridContext = createContext(null);

const ROW_COUNT = 30;
const COL_COUNT = 26;

const GridProvider = ({ children }) => {
  const [selectedCell, setSelectedCell] = useState({
    rowIndex: 0,
    colIndex: 0,
    colLabel: 'A',
  });

  const [data, setData] = useState(() =>
    Array.from({ length: ROW_COUNT }, () => Array.from({ length: COL_COUNT }, () => '')),
  );

  const updateCellValue = useCallback((rowIndex, colIndex, value) => {
    setData((prevData) => {
      const nextData = [...prevData];
      nextData[rowIndex] = [...nextData[rowIndex]];
      nextData[rowIndex][colIndex] = value;
      return nextData;
    });
  }, []);

  const value = useMemo(
    () => ({
      data,
      setData,
      updateCellValue,
      rowCount: ROW_COUNT,
      colCount: COL_COUNT,
      selectedCell,
      setSelectedCell,
    }),
    [data, selectedCell, updateCellValue],
  );

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};

export default GridProvider;
