import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../components/TaskList';
import { TaskContext } from '../Context/TaskContext';

// Mocking the context values
const contextValues = {
  tasks: [
    { id: 1, name: 'Task 1', description: 'Description 1', priority: 'low', completed: false },
    // Add more sample tasks as needed
  ],
  toggleTask: jest.fn(),
  deleteTask: jest.fn(),
  editTask: jest.fn(),
};

test('renders TaskList component', () => {
  render(
    <TaskContext.Provider value={contextValues}>
      <TaskList />
    </TaskContext.Provider>
  );

  // Add your assertions based on the rendered TaskList component
  expect(screen.getByText('Task List')).toBeInTheDocument();
  // Add more assertions as needed
});
