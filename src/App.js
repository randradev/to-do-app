import logo from './logo.svg';
import './App.css';
import { TodoCounter } from './todocounter';
import { TodoSearch } from './todosearch';
import { TodoList } from './todolist';
import { TodoItem } from './todoitem';


function App() {
  return (
    <div className="App">
      
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      {/* <CreateTodoButton /> */}

    </div>
  );
}

export default App;
