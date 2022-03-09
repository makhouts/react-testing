import './App.css';
import { Todo } from './components/Todo';

function App() {
  const todos = [
    {
      id: 1,
      task: 'washdishes',
      completed: false
    },
    {
      id: 2,
      task: 'clean room',
      completed: true
    },
  ]
  return (
    <div className="App">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
