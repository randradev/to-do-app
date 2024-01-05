import { React, useContext } from "react";
import { ToDoContext } from "../utilidades/toDoContext";

function TodoCounter() {
  const {
    completedToDos,
    totalToDos,
  } = useContext(ToDoContext)

  return (
      <h2 className='todo-counter'>
          Has completado <span style={{ color: '#DCEAEF' }}>{completedToDos}</span> de <span style={{ color: '#DCEAEF' }}>{totalToDos}</span> tareas
      </h2>
  )
}

export { TodoCounter };
