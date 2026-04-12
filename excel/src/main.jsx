import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GlobalContext from './context/GlobalContext.jsx';
import GridProvider from './context/GridContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GridProvider>
      <GlobalContext>
        <App />
      </GlobalContext>
    </GridProvider>
  </React.StrictMode>
);
