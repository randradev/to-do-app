import React, { useState } from 'react';
import { TodoCounter } from "./columnaDerecha/todocounter";
import { TodoItem } from "./columnaDerecha/todoitem";
import { TodoList } from "./columnaDerecha/todolist";
import { TodoSearch } from "./columnaDerecha/todosearch";
import { TodoHide } from "./columnaDerecha/todohide";
import './columnaDerecha.css';

//custom hook para el manejo de local storage
function useLocalStorage(itemName, initalValue) {
    
    const localStorageItem = localStorage.getItem(itemName);

    let parsedItem;

    if(!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initalValue));
        parsedItem = initalValue;
    } else {
        parsedItem = JSON.parse(localStorageItem)
    }

    const [item, setItem] = useState(parsedItem);

    //Guardar en el local storage
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return [item, saveItem]
}

function ColumnaDerecha() {

    //Estados
    const [toDos, saveToDos] = useLocalStorage('TODOS_V1', []);
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

    return (
        <div className="container-columna-derecha">
            <TodoCounter
                completed={completedToDos}
                total={totalToDos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList hidden={hidden}>
            {searchedToDos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completarToDo(todo.text)}
                    onDelete={() => deleteToDo(todo.text)}
                />
            ))}
            </TodoList>
            <TodoHide toggleHidden={toggleHidden} />
        </div>
    );
}

export { ColumnaDerecha };