import { createContext, useMemo, useState, useCallback, useEffect, useRef } from 'react';
import { createEmptyGrid } from '../constants/gridConstants';

export const SheetContext = createContext(null);

const STORAGE_KEY = 'spreadsheet_data';
const DEBOUNCE_MS = 500;

export const SheetProvider = ({ children }) => {
  const [sheets, setSheets] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to load sheets from localStorage', e);
    }
    return [
      {
        id: 'sheet-1',
        title: 'Sheet1',
        data: createEmptyGrid(),
      },
    ];
  });

  const [activeSheetId, setActiveSheetId] = useState(sheets[0].id);

  const saveTimerRef = useRef(null);

  useEffect(() => {
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sheets));
      } catch (e) {
        console.error('Failed to save to localStorage', e);
      }
    }, DEBOUNCE_MS);
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [sheets]);

  const activeSheet = useMemo(
    () => sheets.find((s) => s.id === activeSheetId),
    [sheets, activeSheetId]
  );

  const activeSheetData = activeSheet?.data || [];

  const addSheet = useCallback(() => {
    const newId = `sheet-${Date.now()}`;
    const newSheet = {
      id: newId,
      title: `Sheet${sheets.length + 1}`,
      data: createEmptyGrid(),
    };
    setSheets((prev) => [...prev, newSheet]);
    setActiveSheetId(newId);
  }, [sheets.length]);

  const deleteSheet = useCallback(
    (sheetId) => {
      setSheets((prev) => {
        if (prev.length <= 1) return prev;
        const filtered = prev.filter((s) => s.id !== sheetId);
        if (activeSheetId === sheetId) {
          setActiveSheetId(filtered[0].id);
        }
        return filtered;
      });
    },
    [activeSheetId]
  );

  const renameSheet = useCallback((sheetId, newTitle) => {
    setSheets((prev) =>
      prev.map((s) => (s.id === sheetId ? { ...s, title: newTitle } : s))
    );
  }, []);

  const updateCellValue = useCallback(
    (rowIndex, colIndex, value) => {
      setSheets((prev) =>
        prev.map((sheet) => {
          if (sheet.id !== activeSheetId) return sheet;
          const newData = [...sheet.data];
          newData[rowIndex] = [...newData[rowIndex]];
          newData[rowIndex][colIndex] = {
            ...newData[rowIndex][colIndex],
            text: value,
          };
          return { ...sheet, data: newData };
        })
      );
    },
    [activeSheetId]
  );

  const updateCellStyle = useCallback(
    (rowIndex, colIndex, styles) => {
      setSheets((prev) =>
        prev.map((sheet) => {
          if (sheet.id !== activeSheetId) return sheet;
          const newData = [...sheet.data];
          newData[rowIndex] = [...newData[rowIndex]];
          newData[rowIndex][colIndex] = {
            ...newData[rowIndex][colIndex],
            ...styles,
          };
          return { ...sheet, data: newData };
        })
      );
    },
    [activeSheetId]
  );

  const value = useMemo(
    () => ({
      sheets,
      activeSheetId,
      setActiveSheetId,
      activeSheetData,
      addSheet,
      deleteSheet,
      renameSheet,
      updateCellValue,
      updateCellStyle,
    }),
    [
      sheets,
      activeSheetId,
      activeSheetData,
      addSheet,
      deleteSheet,
      renameSheet,
      updateCellValue,
      updateCellStyle,
    ]
  );

  return (
    <SheetContext.Provider value={value}>{children}</SheetContext.Provider>
  );
};