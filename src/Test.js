import React, { useState, useEffect } from 'react';
//import './index.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

const Test = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])

    //STORE NEW TODOS IN LOCAL STORAGE, RESETS ON REFRESH
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]);

    function handleClearTodos() {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos);
    }

    return (
        <div>
        <button className="btn btn-outline-danger .btn-lg" onClick={handleClearTodos} id="clear">Clear done</button>
        <div className="counter">{todos.filter(todo => todo.complete).length} DONE</div>
        {todos.map(todo => {
                if(todo.complete){
                    console.log(todo.name);
                 return (<div key={todo.id} value={todo.name}>{todo.name}</div>)
                } return (null)
        })}
        
        </div>
    )
};

export default Test;