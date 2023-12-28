import './App.css';
import React from 'react';
import { TodoCounter } from './components/columnaDerecha/todocounter';
import { TodoSearch } from './components/columnaDerecha/todosearch';
import { TodoList } from './components/columnaDerecha/todolist';
import { TodoItem } from './components/columnaDerecha/todoitem';
import { MainBackground } from './components/mainbackground';
import { FilaArriba } from './components/filaArriba';
import { ColumnaIzquierda } from './components/columnaIzquierda';

const defaultToDos = [
  { text: 'Create React App', completed: true},
  { text: 'git init', completed: true},
  { text: 'git push origin main', completed: true},
  { text: 'build app structure', completed: false}
];


function App() {
  return (
    <>

      <FilaArriba />

      <ColumnaIzquierda />
      
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultToDos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <MainBackground />

    </>
  );
}

export default App;
