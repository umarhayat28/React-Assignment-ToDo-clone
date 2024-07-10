import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToDoForm from '../ToDoForm';

describe('ToDoForm', () => {
  test('renders ToDoForm component', () => {
    render(<ToDoForm addTodo={jest.fn()} />);
    expect(screen.getByPlaceholderText('Add a new to-do')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  test('calls addTodo when form is submitted', () => {
    const addTodo = jest.fn();
    render(<ToDoForm addTodo={addTodo} />);
    const input = screen.getByPlaceholderText('Add a new to-do');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New ToDo' } });
    fireEvent.click(button);

    expect(addTodo).toHaveBeenCalledWith('New ToDo');
    expect(input.value).toBe('');
  });
});
