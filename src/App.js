import React, { useEffect, useState } from 'react';

const App = () => {
  const [accumulator, setAccumulator] = useState({
    counter: 0,
    name: 'Counter',
  });

  const [counter, setCounter] = useState(5);

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

  /**
   * when we pass an empty array as second arg, the effect runs only on first time that component was render
   * to clear useEffect you must return something, and also it is possible to get the previous value
   */
  useEffect(() => {
    document.title = `${accumulator.name}: ${counter} new messages!`;

    console.log('effect', counter);

    return () => {
      console.log('return', counter);
    };
  }, [counter]);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => updateName(event.target.value)}
      />
      <h1>
        {accumulator.name}: {accumulator.counter}
      </h1>
      <button onClick={increaseCounter}>+1</button>
      <h3>Counter 5: {counter}</h3>
      <button onClick={() => setCounter(counter + 5)}>+ 5</button>
    </div>
  );
};

export default App;
