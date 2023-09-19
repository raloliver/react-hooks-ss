/*
 * File: UseContext.js
 * Project: react-hooks-ss
 * Created: Tuesday, September 19th 2023, 6:11:14 am
 * Last Modified: Tuesday, September 19th 2023, 6:25:11 am
 * Copyright © 2023 AMDE Agência
 */

import React, { createContext } from 'react';
import MainComponent from './MainComponent';

export const MainContext = createContext();

const UseContext = () => {
  return (
    <MainContext.Provider value={true}>
      <div>
        <MainComponent />
      </div>
    </MainContext.Provider>
  );
};

export default UseContext;
