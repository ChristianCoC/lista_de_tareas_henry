import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const AddToDo = ({ setTodos }) => {

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) return;

    setTodos(prevTodos => [...prevTodos, {
      id: Date.now(),
      text: inputValue,
      completed: false
    }]);

    setInputValue('');

  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className='input'
        type="text"
        placeholder="Agregar una nueva tarea..."
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />

      <button className='button' type="submit">Agregar</button>

    </form>
  )
}

export default AddToDo;