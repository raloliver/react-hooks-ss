/*
 * File: SinglePost.js
 * Project: react-hooks-ss
 * Created: Tuesday, September 19th 2023, 6:15:28 am
 * Last Modified: Tuesday, September 19th 2023, 6:25:14 am
 * Copyright © 2023 AMDE Agência
 */

import React, { useContext } from 'react';
import { MainContext } from './UseContext';

const SinglePost = () => {
  const mainContext = useContext(MainContext);
  console.log(mainContext);

  return <h3>SinglePost Works!</h3>;
};

export default SinglePost;
