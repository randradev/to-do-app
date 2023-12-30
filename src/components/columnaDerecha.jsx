import React from "react";
import { TodoCounter } from "./columnaDerecha/todocounter";
import { TodoItem } from "./columnaDerecha/todoitem";
import { TodoList } from "./columnaDerecha/todolist";
import { TodoSearch } from "./columnaDerecha/todosearch";
import { TodoHide } from "./columnaDerecha/todohide";
import './columnaDerecha.css';


function ColumnaDerecha() {
    const defaultToDos = [
        { text: 'Create React App', completed: true},
        { text: 'git init', completed: false},
        { text: 'git push origin main', completed: true},
        { text: 'build app structure', completed: false}
      ];
      
    const [toDos, setToDos] = React.useState(defaultToDos);
    const [searchValue, setSearchValue] = React.useState('');

    const completedToDos = toDos.filter( toDo => !!toDo.completed).length;
    const totalToDos = toDos.length;

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
                {defaultToDos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                />
                ))}
            </TodoList>
            <TodoHide />
        </div>
    );
}

export { ColumnaDerecha };