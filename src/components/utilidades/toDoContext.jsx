import React, { Children, useState } from "react";
import { useLocalStorage } from './useLocalStorage';

const ToDoContext = React.createContext();

function ToDoProvider({ children }) {
    
    //Estados
    const {item: toDos,
        saveItem: saveToDos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [hidden, setHidden] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    //Manejo de errores
    const setTodoError = (message) => {
        setErrorMessage(message);
      };
      
    const clearTodoError = () => {
        setErrorMessage(null);
    };

    //Contador
    const completedToDos = toDos.filter( toDo => !!toDo.completed).length;
    const totalToDos = toDos.length;

    // Buscador
    const searchedToDos = Array.isArray(toDos)
        ? toDos.filter((toDo) => {
            const searchText = searchValue.toLowerCase();
            return toDo && toDo.text && toDo.text.toLowerCase().includes(searchText);
        })
        : [];

    //Completar - descompletar tareas
    const completarToDo = (text) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(
            (toDo) => toDo.text === text
        );
        newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed;
        saveToDos(newToDos);
    };
    
    //Eliminar tareas
    const deleteToDo = (text) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(
            (toDo) => toDo.text === text
        );
        newToDos.splice(toDoIndex, 1);
        saveToDos(newToDos);
    };

    //Ocultar o mostrar tareas
    const toggleHidden = () => {
        setHidden(!hidden);
    };

    //Agregar tarea
    const addToDo = (text) => {
        if (text.trim() !== "") {
            try {
                const newToDos = [...toDos];
                const isTaskExist = newToDos.some((task) => task.text.toLowerCase() === text.toLowerCase());
        
                if (!isTaskExist) {
                    newToDos.push({
                        text,
                        completed: false,
                    });
                    saveToDos(newToDos);
                } else {
                    // Establecer mensaje de error si la tarea ya existe
                    setTodoError("La tarea ya existe. Por favor, elige un nombre único.");
                }
            } catch (error) {
                console.error("Error al agregar tarea:", error);
                setTodoError("Ocurrió un error al agregar la tarea. Por favor, inténtalo de nuevo.");
            }
        }
    };
     
    
    return(
        <ToDoContext.Provider value={{
            loading,
            error,
            completedToDos,
            totalToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completarToDo,
            deleteToDo,
            hidden,
            setHidden,
            toggleHidden,
            addToDo,
            errorMessage,
            setTodoError,
            clearTodoError,
        }}>
            {children}
        </ToDoContext.Provider>
    )
}

export { ToDoContext, ToDoProvider };

// localStorage.removeItem('TODOS_V1');

// const defaultToDos = [
//     {text: 'Lavar la loza', completed: true},
//     {text: 'Lavar la ropa', completed: false},
//     {text: 'Almorzar', completed: true},
//     {text: 'Programar', completed: false},
//     {text: 'Isotretinoína', completed: true},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDos));