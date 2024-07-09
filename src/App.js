import React, { useState, useEffect } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <div>Total Tasks: {todos.length}</div>
      <div>
        Completed Tasks: {todos.filter((todo) => todo.completed).length}
      </div>
    </div>
  );
};

export default App;
