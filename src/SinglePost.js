/*
 * File: SinglePost.js
 * Project: react-hooks-ss
 * Created: Tuesday, September 19th 2023, 6:15:28 am
 * Last Modified: Tuesday, September 19th 2023, 6:42:11 am
 * Copyright © 2023 AMDE Agência
 */

import React, { useContext } from 'react';
import { MainContext } from './context/MainContextProvider';

const SinglePost = () => {
  const mainContext = useContext(MainContext);

  return (
    <>
      <h3>SinglePost Works!</h3>
      <pre>{mainContext}</pre>
    </>
  );
};

export default SinglePost;
