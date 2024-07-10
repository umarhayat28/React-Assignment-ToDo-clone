import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToDoItem from '../ToDoItem';

const todo = { text: 'Test ToDo', completed: false };

describe('ToDoItem', () => {
  test('renders ToDoItem component', () => {
    render(<ToDoItem todo={todo} index={0} toggleTodo={jest.fn()} deleteTodo={jest.fn()} />);
    expect(screen.getByText('Test ToDo')).toBeInTheDocument();
    expect(screen.getByText('Complete')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  test('calls toggleTodo when Complete/Undo button is clicked', () => {
    const toggleTodo = jest.fn();
    render(<ToDoItem todo={todo} index={0} toggleTodo={toggleTodo} deleteTodo={jest.fn()} />);
    fireEvent.click(screen.getByText('Complete'));
    expect(toggleTodo).toHaveBeenCalledWith(0);
  });

  test('calls deleteTodo when Delete button is clicked', () => {
    const deleteTodo = jest.fn();
    render(<ToDoItem todo={todo} index={0} toggleTodo={jest.fn()} deleteTodo={deleteTodo} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(deleteTodo).toHaveBeenCalledWith(0);
  });
});
