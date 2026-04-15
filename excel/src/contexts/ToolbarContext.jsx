import { createContext, useContext, useMemo } from 'react';
import { FontProvider, FontContext } from './FontContext';
import { ColorProvider, ColorContext } from './ColorContext';
import { StyleProvider, StyleContext } from './StyleContext';

export const ToolbarContext = createContext(null);

const ToolbarContextComposer = ({ children }) => {
  const font = useContext(FontContext);
  const color = useContext(ColorContext);
  const style = useContext(StyleContext);

  const value = useMemo(
    () => ({
      ...font,
      ...color,
      ...style,
    }),
    [font, color, style],
  );

  return <ToolbarContext.Provider value={value}>{children}</ToolbarContext.Provider>;
};

const ToolbarProvider = ({ children }) => (
  <FontProvider>
    <ColorProvider>
      <StyleProvider>
        <ToolbarContextComposer>{children}</ToolbarContextComposer>
      </StyleProvider>
    </ColorProvider>
  </FontProvider>
);

export default ToolbarProvider;

