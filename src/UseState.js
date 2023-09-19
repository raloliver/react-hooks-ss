/*
 * File: UseState.js
 * Project: react-hooks-ss
 * Created: Monday, September 18th 2023, 5:42:37 am
 * Last Modified: Tuesday, September 19th 2023, 6:25:21 am
 * Copyright © 2023 AMDE Agência
 */

import React, { useState } from 'react';

const UseState = () => {
  const [accumulator, setAccumulator] = useState({
    counter: 0,
    name: 'Counter',
  });

  function increaseCounter() {
    setAccumulator((state) => ({
      ...state,
      counter: state.counter + 1,
    }));
  }

  function updateName(name) {
    setAccumulator((state) => ({
      ...state,
      name,
    }));
  }

  return (
    <div>
      <input
        type="text"
        onChange={(event) => updateName(event.target.value)}
      />
      <h1>
        {accumulator.name}: {accumulator.counter}
      </h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
};

export default UseState;
