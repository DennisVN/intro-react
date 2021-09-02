import Todo from './Todo';
import React, { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'todoApp.item';

// render out Todos
export default function TodoList({ todos, toggleTodo }) {
    const [allTodos, setAllTodos] = useState([]);

    useEffect(() => {
        //TODO : if state is true, SAVE it in localStorage
        todos.map( item => {
            if (item.complete) {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(item))
            }
        }) 
    }, [todos])


    return (
        todos.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    )
}
