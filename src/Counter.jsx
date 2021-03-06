import { useReducer } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state < 1 ? 0 : state - 1;
    case 'RESET':
      return (state = 0);
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const addCounter = () => {
    dispatch({ type: 'ADD' });
  };

  const minusCounter = () => {
    dispatch({ type: 'MINUS' });
  };

  const resetCounter = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <h3>Counter</h3>
      <p>{count}</p>
      <button onClick={addCounter}>Add +</button>
      <button onClick={minusCounter}>Minus -</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default Counter;
