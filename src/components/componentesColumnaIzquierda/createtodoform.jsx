import React, { useState, useContext, useEffect } from "react";
import { CreateTodoButton } from "./createtodobutton";
import { ToDoContext } from "../utilidades/toDoContext";
import ErrorToDoDuplicado from "../Errores/errortododuplicado";

function CreateToDoForm() {
    const [newToDoValue, setNewToDoValue] = useState('');
    const { addToDo, errorMessage, clearTodoError } = useContext(ToDoContext);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
            // Actualizar showError después de que errorMessage se establezca
            setShowError(!!errorMessage);
        }, [errorMessage]);
        
        const onChange = (event) => {
            setNewToDoValue(event.target.value);
        };
        
        const handleAddToDo = () => {
            addToDo(newToDoValue);
            setNewToDoValue('');
        };
        
        const handleCloseError = () => {
            setShowError(false);
            clearTodoError();
        };
    
    return (
        <div>
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
            {showError && (
                <ErrorToDoDuplicado message={errorMessage} onClose={handleCloseError} />
            )}
        </div>
    );
}

export { CreateToDoForm };