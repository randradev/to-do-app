// CreateToDoForm.jsx
import React, { useState } from "react";
import { CreateTodoButton } from "./createtodobutton"; // Importa el componente CreateTodoButton

function CreateToDoForm({ onAddToDo }) {
    const [newToDoValue, setNewToDoValue] = useState('');

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
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
            {/* Pasa la función `onAddToDo` y el estado `newToDoValue` */}
            <CreateTodoButton newToDoValue={newToDoValue} onAddToDo={() => onAddToDo(newToDoValue)} />
        </form>
    );
}

export { CreateToDoForm };
