import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');

  function increaseCounter() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h3>{input}</h3>
      <input
        type="text"
        onChange={(event) => setInput(event.target.value)}
      />
      <h1>Counter: {counter}</h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
};

export default App;
