import { React,useContext } from 'react';
import '../principalColumnaDerecha/columnaDerecha.css'
import { ToDoContext } from '../utilidades/toDoContext';

function TodoSearch() {

    const {
        searchValue,
        setSearchValue,
    } = useContext(ToDoContext);

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