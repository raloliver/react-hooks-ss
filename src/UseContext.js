/*
 * File: UseContext.js
 * Project: react-hooks-ss
 * Created: Tuesday, September 19th 2023, 6:11:14 am
 * Last Modified: Tuesday, September 19th 2023, 6:38:25 am
 * Copyright © 2023 AMDE Agência
 */

import React from 'react';
import MainContextProvider from './context/MainContextProvider';
import MainComponent from './MainComponent';

const UseContext = () => {
  return (
    <MainContextProvider>
      <MainComponent />
    </MainContextProvider>
  );
};

export default UseContext;
