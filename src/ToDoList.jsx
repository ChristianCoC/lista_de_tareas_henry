/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const TodoList = ({ todos }) => {
  
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;