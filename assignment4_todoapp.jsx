import React, { useState } from 'react';
function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: '공부', done: false },
    { id: 2, text: '운동', done: false }
  ]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (!input.trim()) return;
    
    setTodos([
      ...todos,
      { id: Date.now(), text: input, done: false }
    ]);
    setInput('');
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };
  
  return (
    <div>
      <h1>Todo List</h1>
      
      <div>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>추가</button>
      </div>
      
      {todos.length === 0 ? (
        <p>할 일이 없습니다</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input 
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
              />
              <span style={{
                textDecoration: todo.done ? 'line-through' : 'none'
              }}>
                {todo.text}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default TodoApp;