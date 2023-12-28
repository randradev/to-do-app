function TodoCounter( { total, completed } ) {
    return (
      <h2 className='counter'>
        Has completado {completed} de {total} tareas
      </h2>
    )
  }

export { TodoCounter };