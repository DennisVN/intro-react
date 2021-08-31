import React, { useState, useRef } from 'react';
import TodoList from './TodoList'
import Form from './Form';

function App() {
  // todos: every single todo inside the list
  // setTodos : function to update those 
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return
    console.log(name)
    todoNameRef.current.value = null; 
  }

  return (
    <>
    <TodoList todos={todos}/> 
    <div>
        <input ref={todoNameRef} type="text" placeholder="Write a new todo" />
        <br />
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
    </>
  )
}

export default App;
