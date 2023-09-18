import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HttpClient } from './HttpClient';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HttpClient />
  </React.StrictMode>,
);
