import React from 'react';
function TodoList() {
  const todos = [
    { id: 1, text: '공부', done: true },
    { id: 2, text: '운동', done: false },
    { id: 3, text: '코딩', done: false }
  ];
  
  return (
    <ul>
      {todos.map(todo => (
        <li 
          key={todo.id}
          style={{
            textDecoration: todo.done ? 'line-through' : 'none'
          }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
export default TodoList;