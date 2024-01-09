import React from 'react';

function TodoHide({ toggleHidden, hidden }) {
    return (
        <div className="hide-container" onClick={toggleHidden}>
            <i className={`fa-solid ${hidden ? 'fa-eye' : 'fa-eye-slash'}`}></i>
            <p className="hide-text">{hidden ? 'Muestra' : 'Oculta'} las tareas completadas</p>
        </div>
    );
}

export { TodoHide };