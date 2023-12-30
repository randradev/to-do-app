function TodoCounter( { total, completed } ) {
  return (
      <h2 className='todo-counter'>
          Has completado <span style={{ color: '#DCEAEF' }}>{completed}</span> de <span style={{ color: '#DCEAEF' }}>{total}</span> tareas
      </h2>
  )
}

export { TodoCounter };
