import React, { useState } from 'react';
import TodoList from './TodoList'
import Form from './Form';

function App() {
  // todos: every single todo inside the list
  // setTodos : function to update those 
  const [todos, setTodos] = useState([])
  return (
    <>
    <TodoList todos={todos}/> 
    <Form />
    </>
  )
}

export default App;
