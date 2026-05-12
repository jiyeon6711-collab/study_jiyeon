import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count=>count+1)}>+1</button>
      <button onClick={() => setCount(count=>count-1)}>-1</button>
      <button onClick={() => setCount(0)}>초기화</button>
    </div>
  );
}

export default Counter;