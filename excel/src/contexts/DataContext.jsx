import { createContext, useCallback, useMemo, useState } from 'react';

export const DataContext = createContext(null);

const ROW_COUNT = 30;
const COL_COUNT = 26;

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() =>
    Array.from({ length: ROW_COUNT }, () =>
      Array.from({ length: COL_COUNT }, () => ({
        text: "",
        textColor: "text-black",
        bg: "bg-white",
        size: 11,
        fontFamily: "sans-serif",
        isBold: false,
        align: "left"
      }))
    )
  );

  const updateCellValue = useCallback((rowIndex, colIndex, value) => {
    if (
      typeof rowIndex !== 'number' ||
      typeof colIndex !== 'number' ||
      rowIndex < 0 ||
      colIndex < 0 ||
      rowIndex >= ROW_COUNT ||
      colIndex >= COL_COUNT
    ) {
      return;
    }

    setData(prev => {
      const next = [...prev];
      next[rowIndex] = [...next[rowIndex]];
      next[rowIndex][colIndex] = {
        ...next[rowIndex][colIndex],
        text: value
      };
      return next;
    });
  }, []);

  const updateCellStyle = useCallback((rowIndex, colIndex, styles) => {
    if (
      typeof rowIndex !== 'number' ||
      typeof colIndex !== 'number' ||
      rowIndex < 0 ||
      colIndex < 0 ||
      rowIndex >= ROW_COUNT ||
      colIndex >= COL_COUNT
    ) {
      return;
    }

    setData(prev => {
      const next = [...prev];
      next[rowIndex] = [...next[rowIndex]];
      next[rowIndex][colIndex] = {
        ...next[rowIndex][colIndex],
        ...styles
      };
      return next;
    });
  }, []);

  const value = useMemo(() => ({
    data,
    updateCellValue,
    updateCellStyle,
    rowCount: ROW_COUNT,
    colCount: COL_COUNT,
  }), [data]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};