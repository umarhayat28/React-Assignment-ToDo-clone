import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default ToDoList;
