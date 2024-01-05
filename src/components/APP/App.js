import React from 'react';
import './app.css'
import { FilaArriba } from '../principalFilaArriba/filaArriba';
import { MainBody } from '../mainBody/mainbody';
import { ToDoProvider } from '../utilidades/toDoContext';

function App() {
  return (
    <>
      <ToDoProvider>
        <FilaArriba />
        <MainBody />
      </ToDoProvider>
    </>
  );
}

export default App;