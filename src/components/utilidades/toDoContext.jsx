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
    
    //Contador
    const completedToDos = toDos.filter( toDo => !!toDo.completed).length;
    const totalToDos = toDos.length;

    //Buscador
    const searchedToDos = toDos.filter(
        (toDos) => {
            const searchText = searchValue.toLocaleLowerCase();
            return toDos.text.includes(searchText);
        }
    );

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