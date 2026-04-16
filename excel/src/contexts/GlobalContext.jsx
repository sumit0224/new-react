import { createContext, useContext, useMemo } from 'react';
import { UIProvider, UIContext } from './UIContext';
import { SheetUIProvider, SheetUIContext } from './SheetUiContext';

export const GlobalContext = createContext(null);

const GlobalContextComposer = ({ children }) => {
  const ui = useContext(UIContext);
  const sheetUI = useContext(SheetUIContext);

  const value = useMemo(
    () => ({
      ...ui,
      ...sheetUI,
    }),
    [ui, sheetUI],
  );

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const GlobalProvider = ({ children }) => (
  <UIProvider>
    <SheetUIProvider>
      <GlobalContextComposer>{children}</GlobalContextComposer>
    </SheetUIProvider>
  </UIProvider>
);

export default GlobalProvider;
