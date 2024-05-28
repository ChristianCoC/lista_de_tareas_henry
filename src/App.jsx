import './App.css'
import { useState } from 'react';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
import ToDoCounter from './ToDoCounter';

function App() {
  
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1 className='title'>Lista de Tareas</h1>
      <AddToDo setTodos={setTodos} />
      <ToDoList todos={todos} />
      <ToDoCounter totalTasks={todos.length} />
    </div>
  );
}

export default App;
