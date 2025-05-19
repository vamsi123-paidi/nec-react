import { useState } from 'react';
import { FaCheck, FaUndo, FaEdit, FaTrash, FaSave } from 'react-icons/fa';

function TodoItem({ todo, deleteTodo, toggleComplete, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          <button type="submit"><FaSave /> Save</button>
        </form>
      ) : (
        <>
          <span className="todo-text">{todo.text}</span>
          <div className="actions">
            <button 
              onClick={() => toggleComplete(todo.id)}
              className="complete-btn"
            >
              {todo.isCompleted ? <FaUndo /> : <FaCheck />}
              <span className="action-text">{todo.isCompleted ? 'Undo' : 'Complete'}</span>
            </button>
            <button 
              onClick={() => setIsEditing(true)}
              className="edit-btn"
            >
              <FaEdit /> <span className="action-text">Edit</span>
            </button>
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="delete-btn"
            >
              <FaTrash /> <span className="action-text">Delete</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;