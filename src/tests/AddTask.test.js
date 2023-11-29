import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTask from '../components/AddTask';
import { TaskContext } from '../Context/TaskContext';

// Mocking the context values
const contextValues = {
  addTask: jest.fn(),
};

test('renders AddTask component and adds a task', () => {
  render(
    <TaskContext.Provider value={contextValues}>
      <AddTask />
    </TaskContext.Provider>
  );

  // Interact with the form elements and submit
  fireEvent.change(screen.getByLabelText(/Task Name/i), { target: { value: 'New Task' } });
  fireEvent.click(screen.getByText(/Add Task/i));

  // Add your assertions based on the behavior you expect
  expect(contextValues.addTask).toHaveBeenCalledWith(
    expect.objectContaining({ name: 'New Task' })
  );
  // Add more assertions as needed
});
