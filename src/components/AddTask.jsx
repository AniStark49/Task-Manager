
import React, { useState, useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';
import './AddTask.css';

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') return;
    addTask({
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      priority,
      completed: false,
    });
    setTaskName('');
    setTaskDescription('');
    setPriority('low');
  };

  return (
    <div className="add-task-container">
      <h2>Add Task</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="taskName" className="form-label">
            Task Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">
            Task Description:
          </label>
          <textarea
            className="form-control"
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="priority" className="form-label">
            Priority:
          </label>
          <select
            className="form-select"
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button type="submit" className="addtask-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
