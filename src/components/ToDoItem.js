import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-item">
      <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
        {todo.text}
      </span>
      <button onClick={() => toggleTodo(index)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
};

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default ToDoItem;
