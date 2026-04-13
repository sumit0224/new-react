import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import './styles/index.css';
import GlobalProvider from './contexts/GlobalContext.jsx';
import GridProvider from './contexts/GridContext.jsx';
import ToolbarProvider from './contexts/ToolbarContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToolbarProvider>
      <GridProvider>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </GridProvider>
    </ToolbarProvider>
  </React.StrictMode>
);
