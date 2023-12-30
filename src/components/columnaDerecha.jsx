import React, { useState } from 'react';
import { TodoCounter } from "./columnaDerecha/todocounter";
import { TodoItem } from "./columnaDerecha/todoitem";
import { TodoList } from "./columnaDerecha/todolist";
import { TodoSearch } from "./columnaDerecha/todosearch";
import { TodoHide } from "./columnaDerecha/todohide";
import './columnaDerecha.css';


function ColumnaDerecha() {
    //Tareas por defecto
    const defaultToDos = [
        { text: 'Create React App', completed: true},
        { text: 'git init', completed: false},
        { text: 'git push origin main', completed: true},
        { text: 'build app structure', completed: false}
      ];
    
    //Estados de To Do
    const [toDos, setToDos] = React.useState(defaultToDos);
    const [searchValue, setSearchValue] = useState('');
    
    //Contador
    const completedToDos = toDos.filter( toDo => !!toDo.completed).length;
    const totalToDos = toDos.length;

    //Buscador
    const searchedToDos = toDos.filter(
        (toDos) => {
            // const toDoText = toDos.text.toLowerCase(); PROBAR PARA ELIMINAR
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
        setToDos(newToDos);
    };
    
    //Eliminar tareas
    const deleteToDo = (text) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(
            (toDo) => toDo.text === text
        );
        newToDos.splice(toDoIndex, 1);
        setToDos(newToDos);
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
            <TodoList>
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
            <TodoHide />
        </div>
    );
}

export { ColumnaDerecha };