import React from 'react';
import '../columnaDerecha.css'

function TodoSearch({
    searchValue,
    setSearchValue
}) {

    return(
        <div className="search-container">
            <i className="fas fa-search"></i>
            <input className="to-do-search"
            placeholder="Busca tus tareas aquí..."
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value); //Se guarda el valor que escribe el usuario
            }}
            />
        </div>
    );
}

export { TodoSearch };