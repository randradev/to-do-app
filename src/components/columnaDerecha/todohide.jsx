import React, { useState } from 'react';

function TodoHide() {
    const [hidden, setHidden] = useState(false);

    const toggleVisibility = () => {
        setHidden(!hidden);
    };

    return (
        <div className="hide-container" onClick={toggleVisibility}>
            <i className={`fa-solid ${hidden ? 'fa-eye' : 'fa-eye-slash'}`}></i>
            <p className="hide-text">{hidden ? 'Muestra las tareas completadas' : 'Oculta las tareas completadas'}</p>
        </div>
    );
}

export { TodoHide };