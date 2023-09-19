/*
 * File: MainContextProvider.js
 * Project: react-hooks-ss
 * Created: Tuesday, September 19th 2023, 6:30:56 am
 * Last Modified: Tuesday, September 19th 2023, 6:42:18 am
 * Copyright © 2023 AMDE Agência
 */

import React, { createContext, useState } from 'react';

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [input] = useState('input value as a string');

  return <MainContext.Provider value={input}>{children}</MainContext.Provider>;
};

export default MainContextProvider;
