import React, { useContext } from "react";
import { ToDoContext } from '../utilidades/toDoContext';

function CreateTodoButton( { newToDoValue }) {

    const {
        addToDo
    } = useContext(ToDoContext);

    //Control lógica de OnClick
    const onClick = (event) => {
        event.preventDefault();
        addToDo(newToDoValue);;
    }

    return (
        <div className="button-container">
            <button className="create-to-do-button"
                    onClick={onClick}>
                Crear Tarea <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    );
}

export { CreateTodoButton };