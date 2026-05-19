import React, { useState } from 'react';
function EventExample() {
  const [text, setText] = useState('');
  
  // 1. 클릭 이벤트
  const handleClick = () => {
    console.log('클릭!');
  };
  
  // 2. 입력 이벤트
  const handleChange = (e) => {
    setText(e.target.value);
  };
  
  // 3. 폼 제출 이벤트
  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 새로고침 방지
    console.log('제출:', text);
  };
  
  return (
    <div>
      <button onClick={handleClick}>클릭</button>
      
      <input 
        value={text}
        onChange={handleChange}
      />
      
      <form onSubmit={handleSubmit}>
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
export default EventExample;