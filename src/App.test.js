import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByText('To-Do List')).toBeInTheDocument();
  });

  test('adds a new to-do item', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Add a new to-do'), {
      target: { value: 'New To-Do' },
    });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('New To-Do')).toBeInTheDocument();
  });

  test('marks a to-do item as completed', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Add a new to-do'), {
      target: { value: 'New To-Do' },
    });
    fireEvent.click(screen.getByText('Add'));
    fireEvent.click(screen.getByText('Complete'));
    expect(screen.getByText('New To-Do')).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a to-do item', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Add a new to-do'), {
      target: { value: 'New To-Do' },
    });
    fireEvent.click(screen.getByText('Add'));
    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('New To-Do')).not.toBeInTheDocument();
  });

  test('displays correct task counts', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Add a new to-do'), {
      target: { value: 'New To-Do' },
    });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('Total Tasks: 1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Complete'));
    expect(screen.getByText('Completed Tasks: 1')).toBeInTheDocument();
  });
});
