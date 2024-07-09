import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new to-do"
      />
      <button type="submit">Add</button>
    </form>
  );
};

ToDoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default ToDoForm;
