import React, { useState } from 'react';
import { TodoCounter } from "../componentesColumnaDerecha/todocounter";
import { TodoItem } from "../componentesColumnaDerecha/todoitem";
import { TodoList } from "../componentesColumnaDerecha/todolist";
import { TodoSearch } from "../componentesColumnaDerecha/todosearch";
import { TodoHide } from "../componentesColumnaDerecha/todohide";
import { TodosLoading } from "../componentesColumnaDerecha/todosloading";
import { TodosError } from "../componentesColumnaDerecha/todoserror";
import { TodosEmpty } from "../componentesColumnaDerecha/todosempty";
import './columnaDerecha.css';
import { useLocalStorage } from '../utilidades/useLocalStorage';

// localStorage.removeItem('TODOS_V1');

// const defaultToDos = [
//     {text: 'Lavar la loza', completed: true},
//     {text: 'Lavar la ropa', completed: false},
//     {text: 'Almorzar', completed: true},
//     {text: 'Programar', completed: false},
//     {text: 'Isotretinoína', completed: true},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDos));

function ColumnaDerecha() {

//LÓGICA

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


//UI

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
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && searchedToDos.length === 0) && <TodosEmpty />}
            
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