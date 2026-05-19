import React, { useState, useEffect } from 'react';

// 함수형 컴포넌트 + Hook (간단함!)
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('마운트됨');
  }, []);
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
export default Counter;