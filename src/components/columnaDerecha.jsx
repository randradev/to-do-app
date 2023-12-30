import { TodoCounter } from "./columnaDerecha/todocounter";
import { TodoItem } from "./columnaDerecha/todoitem";
import { TodoList } from "./columnaDerecha/todolist";
import { TodoSearch } from "./columnaDerecha/todosearch";
import { TodoHide } from "./columnaDerecha/todohide";
import './columnaDerecha.css';


function ColumnaDerecha() {
    
    const defaultToDos = [
        { text: 'Create React App', completed: true},
        { text: 'git init', completed: true},
        { text: 'git push origin main', completed: true},
        { text: 'build app structure', completed: false}
      ];
    
    return (
        <div className="container-columna-derecha">
            <TodoCounter completed={16} total={25} />
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
            <TodoHide />
        </div>
    );
}

export { ColumnaDerecha };