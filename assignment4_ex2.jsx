import React, { useState, useEffect } from 'react';
function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);
    
    // 클린업: 언마운트 시 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div>
      Window size: {size.width} x {size.height}
    </div>
  );
}
export default WindowSize;