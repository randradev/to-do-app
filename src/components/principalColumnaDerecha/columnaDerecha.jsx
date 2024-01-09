import React, { useContext } from 'react';
import { TodoCounter } from "../componentesColumnaDerecha/todocounter";
import { TodoItem } from "../componentesColumnaDerecha/todoitem";
import { TodoList } from "../componentesColumnaDerecha/todolist";
import { TodoSearch } from "../componentesColumnaDerecha/todosearch";
import { TodoHide } from "../componentesColumnaDerecha/todohide";
import { TodosLoading } from "../componentesColumnaDerecha/todosloading";
import { TodosError } from "../componentesColumnaDerecha/todoserror";
import { TodosEmpty } from "../componentesColumnaDerecha/todosempty";
import './columnaDerecha.css';
import { ToDoContext } from '../utilidades/toDoContext';

function ColumnaDerecha() {

    const {
        loading,
        error,
        searchedToDos,
        completarToDo,
        deleteToDo,
        hidden,
        toggleHidden,
    } = useContext(ToDoContext);

    return (
        <div className="container-columna-derecha">
            <TodoCounter />

            <TodoSearch />
            
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


            <TodoHide toggleHidden={toggleHidden} hidden={hidden} />
        </div>
    );
}

export { ColumnaDerecha };