import { useState } from 'react';

function Counter() {
  // [state값, state변경함수] = useState(초기값)
  const [count, setCount] = useState(0); // useState는 리액트에서 제공해주는 훅이다
  //use로 시작하는 특별한 함수들 => 생명주기 기능을 이용한 함수(this 없이 사용가능) => 그냥 내장 함수라고 생각해주세요
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}