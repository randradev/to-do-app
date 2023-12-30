import React from 'react';

function TodoItem(props) {
    return (
        <li className="todo-item">
            <div className="icon-container">
                <i className={`status-icon ${props.completed ? 'fas fa-check-circle' : 'far fa-circle'}`} onClick={props.onComplete}></i>
                <p className={props.completed ? 'completed' : ''}>{props.text}</p>
            </div>
            <i className="delete-icon fas fa-times" onClick={props.onDelete}></i>
        </li>
    );
}

export { TodoItem };