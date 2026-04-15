import { createContext, useMemo, useState } from 'react';

export const StyleContext = createContext(null);

export const StyleProvider = ({ children }) => {
  const [isBold, setIsBold] = useState(false);

  const value = useMemo(() => ({
    isBold,
    setIsBold,
  }), [isBold]);

  return (
    <StyleContext.Provider value={value}>
      {children}
    </StyleContext.Provider>
  );
};