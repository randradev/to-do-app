function TodoItem(props) {
    return (
        <li className="todo-item">
           <p>{props.text}</p>
        </li>
    );
}

export { TodoItem };