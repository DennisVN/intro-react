import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

const Test = () => {
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])

    //STORE NEW TODOS IN LOCAL STORAGE, RESETS ON REFRESH
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]);
    // RESET TODO DEPENDING ON SELECTION
    function toggleTodo(id) {
        const newTodos =  [...todos];
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function handleAddTodo(e) {
        const name = todoNameRef.current.value;
        if (name === '') return
        setTodos(prevTodos => {
        return [...prevTodos, {id: uuidv4(), name: name, complete: false }]
        })
        todoNameRef.current.value = null; 
    }

    function handleClearTodos() {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos);
    }

    return (
        <>
        <div className="counter">{todos.filter(todo => todo.complete).length} DONE</div>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        </>
    )
};

export default Test;