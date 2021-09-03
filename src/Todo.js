import React from 'react';
import './index.css';

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <div className="input-group-prepend text-center mt-0"> 
            <label className="input-group-text">
                <input className ="form-check-input mt-0" type="checkbox" checked = {todo.complete} onChange={handleTodoClick}/>
                {todo.name}
            </label>
        </div>
    )
}
