import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTask from '../components/AddTask';
import { TaskContext } from '../Context/TaskContext';


const contextValues = {
  addTask: jest.fn(),
};

test('renders AddTask component and adds a task', () => {
  render(

    <TaskContext.Provider value={contextValues}>
      <AddTask />
    </TaskContext.Provider>
  );

  fireEvent.change(screen.getByLabelText(/Task Name/i), { target: { value: 'New Task' } });
  fireEvent.click(screen.getByText(/Add the Task/i));
  
  expect(contextValues.addTask).toHaveBeenCalledWith(
    expect.objectContaining({ name: 'New Task' })
  );

  expect(screen.getByLabelText(/Task Name/i).value).toBe('');
  
  });
