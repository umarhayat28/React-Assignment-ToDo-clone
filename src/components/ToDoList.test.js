import React from 'react';
import { render, screen } from '@testing-library/react';
import ToDoList from '../ToDoList';

const todos = [
  { text: 'Test ToDo 1', completed: false },
  { text: 'Test ToDo 2', completed: true },
];

describe('ToDoList', () => {
  test('renders ToDoList component', () => {
    render(<ToDoList todos={todos} toggleTodo={jest.fn()} deleteTodo={jest.fn()} />);
    expect(screen.getByText('Test ToDo 1')).toBeInTheDocument();
    expect(screen.getByText('Test ToDo 2')).toBeInTheDocument();
  });
});
