import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToDoForm from '../components/ToDoForm';

describe('ToDoForm', () => {
  test('renders ToDoForm component', () => {
    render(<ToDoForm addTodo={jest.fn()} />);
    expect(screen.getByPlaceholderText('Add a new to-do')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  test('calls addTodo when form is submitted', () => {
    const addTodo = jest.fn();
    render(<ToDoForm addTodo={addTodo} />);
    fireEvent.change(screen.getByPlaceholderText('Add a new to-do'), {
      target: { value: 'New To-Do' },
    });
    fireEvent.click(screen.getByText('Add'));
    expect(addTodo).toHaveBeenCalledWith('New To-Do');
  });
});
