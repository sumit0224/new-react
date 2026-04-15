import { createContext, useContext, useMemo } from 'react';
import { UIProvider, UIContext } from './UIContext';
import { SheetProvider, SheetContext } from './SheetContext';
import { SheetUIProvider, SheetUIContext } from './SheetUiContext';

export const GlobalContext = createContext(null);

const GlobalContextComposer = ({ children }) => {
  const ui = useContext(UIContext);
  const sheet = useContext(SheetContext);
  const sheetUI = useContext(SheetUIContext);

  const value = useMemo(
    () => ({
      ...ui,
      ...sheet,
      ...sheetUI,
    }),
    [ui, sheet, sheetUI],
  );

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const GlobalProvider = ({ children }) => (
  <UIProvider>
    <SheetProvider>
      <SheetUIProvider>
        <GlobalContextComposer>{children}</GlobalContextComposer>
      </SheetUIProvider>
    </SheetProvider>
  </UIProvider>
);

export default GlobalProvider;
