import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new data..."
      />
      <button type="submit">
        <FaPlus /> Add
      </button>
    </form>
  );
}

export default TodoForm;