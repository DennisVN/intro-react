import Todo from './Todo';
import React, { useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'todoApp.item';

// render out Todos
export default function TodoList({ todos, toggleTodo }) {

    useEffect(() => {
        //TODO : if state is true, SAVE it in localStorage
        todos.map( item => {
            if (item.complete) {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(item))
                console.log(item.complete);
            } return (null)
        }) 
    }, [todos])


    return (
        todos.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    )
}
