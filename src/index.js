import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import { AppProvider } from './context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);