import { createContext, useContext, useMemo } from 'react';
import { GridMetaProvider, GridMetaContext } from './GridMetaContext';
import { SelectionProvider, SelectionContext } from './SelectionContext';
import { DataProvider, DataContext } from './DataContext';

export const GridContext = createContext(null);

const GridContextComposer = ({ children }) => {
  const gridMeta = useContext(GridMetaContext);
  const selection = useContext(SelectionContext);
  const data = useContext(DataContext);

  const value = useMemo(
    () => ({
      ...gridMeta,
      ...selection,
      ...data,
    }),
    [gridMeta, selection, data],
  );

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};

const GridProvider = ({ children }) => (
  <GridMetaProvider>
    <SelectionProvider>
      <DataProvider>
        <GridContextComposer>{children}</GridContextComposer>
      </DataProvider>
    </SelectionProvider>
  </GridMetaProvider>
);

export default GridProvider;

