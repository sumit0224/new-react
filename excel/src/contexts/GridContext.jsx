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
    Array.from({ length: ROW_COUNT }, () =>
      Array.from({ length: COL_COUNT }, () => ({
        text: "",
        textColor: "text-black",
        bg: "bg-white",
        size: "11px",
      }))
    )
  );

  const updateCellValue = useCallback((rowIndex, colIndex, value) => {
    setData((prevData) => {
      const nextData = [...prevData];
      nextData[rowIndex] = [...nextData[rowIndex]];
      nextData[rowIndex][colIndex] = {
        ...nextData[rowIndex][colIndex],
        text: value,
      };
      return nextData;
    });
  }, []);

  const updateCellStyle = useCallback((rowIndex, colIndex, styles) => {
    setData((prevData) => {
      const nextData = [...prevData];
      nextData[rowIndex] = [...nextData[rowIndex]];
      nextData[rowIndex][colIndex] = {
        ...nextData[rowIndex][colIndex],
        ...styles,
      };
      return nextData;
    });
  }, []);

  const value = useMemo(
    () => ({
      data,
      setData,
      updateCellValue,
      updateCellStyle,
      rowCount: ROW_COUNT,
      colCount: COL_COUNT,
      selectedCell,
      setSelectedCell,
    }),
    [data, selectedCell, updateCellValue, updateCellStyle],
  );

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};

export default GridProvider;