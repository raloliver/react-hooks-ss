import React, { useState } from 'react';

const App = () => {
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

export default App;
