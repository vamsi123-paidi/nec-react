import { useReducer } from 'react';
import reducer from './components/InputRef';
import UseMemoExample from './components/InputRef';
const App = () => {
     const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      < UseMemoExample/>
    </div>
  );
}

export default App