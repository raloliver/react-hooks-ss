/*
 * File: index.js
 * Project: react-hooks-ss
 * Created: Monday, September 18th 2023, 5:42:37 am
 * Last Modified: Tuesday, September 19th 2023, 6:25:03 am
 * Copyright © 2023 AMDE Agência
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseContext from './UseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseContext />
  </React.StrictMode>,
);
