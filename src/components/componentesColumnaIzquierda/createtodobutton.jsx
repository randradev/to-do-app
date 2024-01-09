import React from "react";

function CreateTodoButton( { handleAddToDo }) {

    //Control lógica de OnClick
    const onClick = (event) => {
        event.preventDefault();
        handleAddToDo();
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