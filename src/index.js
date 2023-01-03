import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { ThemeProvider } from './context/theme.jsx';
import { MenuProvider } from './context/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </ThemeProvider>
  </React.StrictMode>
);