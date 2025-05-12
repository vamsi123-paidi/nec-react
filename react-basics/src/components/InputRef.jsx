import React, { useState, useMemo } from 'react';

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // Simulate a heavy computation
  const expensiveValue = useMemo(() => {
    console.log('Calculating...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Count: {count}</p>
      <p>Other : {other}</p>
      <p>Expensive Value (count * 2): {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(other + 1)}>Change Other State</button>
    </div>
  );
}

export default UseMemoExample