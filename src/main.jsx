import React from 'react';
import ReactDOM from 'react-dom/client';
import LanguagesProvider from './utils/context/context';
import { GlobalStyle } from './main.style';
import Layout from './components/Layout/Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguagesProvider>
      <GlobalStyle />
      <Layout />
    </LanguagesProvider>
  </React.StrictMode>,
)
