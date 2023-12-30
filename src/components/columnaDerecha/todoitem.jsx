import React from 'react';

function TodoItem(props) {
    return (
        <li className="todo-item">
            <div className="icon-container">
                <i className={`status-icon ${props.completed ? 'fas fa-check-circle' : 'far fa-circle'}`}></i>
                <p className={props.completed ? 'completed' : ''}>{props.text}</p>
            </div>
            <i className="delete-icon fas fa-times"></i>
        </li>
    );
}

export { TodoItem };