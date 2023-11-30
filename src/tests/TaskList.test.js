import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../components/TaskList';
import { TaskContext } from '../Context/TaskContext';


const contextValues = {
  tasks: [
    { id: 1, name: 'Task 1', description: 'Description 1', priority: 'low', completed: false },

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


  expect(screen.getByText('Task List')).toBeInTheDocument();

});
