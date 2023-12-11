import logo from './logo.svg';
import './App.css';
import { TodoCounter } from './todocounter';
import { TodoSearch } from './todosearch';
import { TodoList } from './todolist';
import { TodoItem } from './todoitem';
import { CreateTodoButton } from './createtodobutton';


function App() {
  return (
    <div className="App">
      
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />

    </div>
  );
}

export default App;
