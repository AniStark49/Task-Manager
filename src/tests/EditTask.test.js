import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditTask from '../components/EditTask';

test('renders EditTask component and updates a task', () => {
  const updateTaskMock = jest.fn();
  const onCloseMock = jest.fn();

  render(
    <EditTask editedTask={{ id: 1, name: 'Task 1', description: 'Description 1', priority: 'low' }} 
              updateTask={updateTaskMock} 
              onClose={onCloseMock} />
  );


  fireEvent.change(screen.getByLabelText(/Edit Task Name/i), { target: { value: 'Updated Task' } });
  fireEvent.click(screen.getByText(/Save Changes/i));


  expect(updateTaskMock).toHaveBeenCalledWith(
    expect.objectContaining({ name: 'Updated Task' })
  );
  expect(onCloseMock).toHaveBeenCalled();

});
