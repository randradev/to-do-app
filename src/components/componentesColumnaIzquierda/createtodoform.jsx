import React, { useState, useContext } from "react";
import { CreateTodoButton } from "./createtodobutton";
import { ToDoContext } from "../utilidades/toDoContext";

function CreateToDoForm() {
    const [newToDoValue, setNewToDoValue] = useState('');
    const { addToDo } = useContext(ToDoContext);

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    }

    const handleAddToDo = () => {
        addToDo(newToDoValue);
        setNewToDoValue('');
      }

    return (
        <form>
            <div className="form-group">
                <label className="create-to-do-form-label">Nombre de la tarea</label>
                <input
                    className="create-to-do-form-input"
                    placeholder="Escribe tu nueva tarea aquí"
                    value={newToDoValue}
                    onChange={onChange}
                />
            </div>
            <CreateTodoButton handleAddToDo={handleAddToDo} />
        </form>
    );
}

export { CreateToDoForm };