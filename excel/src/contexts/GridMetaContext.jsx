import { createContext, useMemo } from 'react';

export const GridMetaContext = createContext(null);

const ROW_COUNT = 30;
const COL_COUNT = 26;

export const GridMetaProvider = ({ children }) => {
  const value = useMemo(() => ({
    rowCount: ROW_COUNT,
    colCount: COL_COUNT,
  }), []);

  return (
    <GridMetaContext.Provider value={value}>
      {children}
    </GridMetaContext.Provider>
  );
};