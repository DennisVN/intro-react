import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

const Home = () => {
    // todos: every single todo inside the list
    // setTodos : function to update those 
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
        <div className="col-lg d-flex justify-content-center">
            <div className="col-sm-12 d-flex justify-content-center">
                <input className="inputbox input-group input-group-sm-3" ref={todoNameRef} type="text"  placeholder="Write a new todo" />
                <button className="btn btn-outline-success .btn-lg" onClick={handleAddTodo} id="add">Add todo</button>
            </div>
        </div>
            <div className="todoListItems  justify-content-center">
            <div className="counter">{todos.filter(todo => !todo.complete).length} LEFT TO DO </div>
                <TodoList todos={todos} toggleTodo={toggleTodo}/>
            </div> 
        </>
    )
};
export default  Home;



