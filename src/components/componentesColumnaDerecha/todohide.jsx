import React from 'react';

function TodoHide({ toggleHidden }) {
    return (
        <div className="hide-container" onClick={toggleHidden}>
            <i className="fa-solid fa-eye"></i>
            <p className="hide-text">Oculta las tareas completadas</p>
        </div>
    );
}

export { TodoHide };