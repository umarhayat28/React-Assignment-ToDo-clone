import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByText('To-Do List')).toBeInTheDocument();
    expect(screen.getByText('Total Tasks: 0')).toBeInTheDocument();
    expect(screen.getByText('Completed Tasks: 0')).toBeInTheDocument();
  });

  test('adds a new to-do item', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Add a new to-do');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New ToDo' } });
    fireEvent.click(button);

    expect(screen.getByText('New ToDo')).toBeInTheDocument();
    expect(screen.getByText('Total Tasks: 1')).toBeInTheDocument();
    expect(screen.getByText('Completed Tasks: 0')).toBeInTheDocument();
  });

  test('marks a to-do item as completed', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Add a new to-do');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New ToDo' } });
    fireEvent.click(button);

    fireEvent.click(screen.getByText('Complete'));

    expect(screen.getByText('Undo')).toBeInTheDocument();
    expect(screen.getByText('Completed Tasks: 1')).toBeInTheDocument();
  });

  test('deletes a to-do item', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Add a new to-do');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New ToDo' } });
    fireEvent.click(button);

    fireEvent.click(screen.getByText('Delete'));

    expect(screen.queryByText('New ToDo')).not.toBeInTheDocument();
    expect(screen.getByText('Total Tasks: 0')).toBeInTheDocument();
    expect(screen.getByText('Completed Tasks: 0')).toBeInTheDocument();
  });
});
