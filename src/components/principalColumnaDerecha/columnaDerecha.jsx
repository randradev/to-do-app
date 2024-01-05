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
import { ToDoContext, ToDoProvider } from '../utilidades/toDoContext';

function ColumnaDerecha() {

    return (

        <ToDoProvider>
            <div className="container-columna-derecha">
                <TodoCounter
                    // completed={completedToDos}
                    // total={totalToDos}
                />
                <TodoSearch
                    // searchValue={searchValue}
                    // setSearchValue={setSearchValue}
                />
                
                {/* To Do List */}
                <ToDoContext.Consumer>
                    {({
                        hidden,
                        loading,
                        error,
                        searchedToDos,
                        completarToDo,
                        deleteToDo
                    }) => (
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
                    )}                    
                </ToDoContext.Consumer>

                {/* To Do Hide */}
                <ToDoContext.Consumer>
                    {({
                        toggleHidden,
                    }) => (
                        <TodoHide toggleHidden={toggleHidden} />  
                    )}  
                </ToDoContext.Consumer>
                
            </div>
        </ToDoProvider>
    );
}

export { ColumnaDerecha };