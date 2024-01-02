import React from 'react';

function TodoList({ children, hidden }) {
    // Filtrar las tareas basándonos en el estado de ocultar
    const filteredTasks = hidden
        ? React.Children.toArray(children).filter(task => !task.props.completed)
        : React.Children.toArray(children);

    return (
        <ul className="todo-list">
            {filteredTasks}
        </ul>
    );
}

export { TodoList };