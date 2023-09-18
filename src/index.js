import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HttpGet from './HttpGet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HttpGet />
  </React.StrictMode>,
);
