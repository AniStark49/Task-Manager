// TaskList.jsx
import React, { useContext, useState } from 'react';
import { TaskContext } from '../Context/TaskContext';
import EditTask from './EditTask'; // Import EditTask component
import './TaskList.css'; // Import the CSS file for styling

const TaskList = () => {
  const { tasks, editTask, toggleTask, deleteTask } = useContext(TaskContext);
  const [editTaskData, setEditTaskData] = useState(null);

  const handleEdit = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditTaskData(taskToEdit);
  };

  const handleUpdateTask = (updatedTask) => {
    editTask(updatedTask.id, updatedTask);
    setEditTaskData(null);
  };
  

  return (
    <div className="task-list-container">
      <h1>Task List</h1>
      <ul>
        {tasks?.map((task) => (
          <li key={task.id} className={`task-item`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="task-checkbox"
            />
            <span className={`task-name ${task.completed ? 'task-completed' : ''}`}>
              {task.name}
            </span>
            <p className={`task-description ${task.completed ? 'task-completed' : ''}`}>{task.description}</p>
            <span style={{color:task.priority==="High"?"red":task.priority==="Medium"?"yellow":task.priority==="Low"?"green":null}} className={`task-priority ${task.completed ? 'task-completed' : ''}`}>{task.priority.toUpperCase()}</span>
            <button onClick={() => handleEdit(task.id)} className="task-edit-btn">
              Edit
            </button>
            <button onClick={() => deleteTask(task.id)} className="task-delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>

      {editTaskData && (
        <EditTask
          editedTask={editTaskData}
          updateTask={handleUpdateTask}
          onClose={() => setEditTaskData(null)}
        />
      )}
    </div>
  );
};

export default TaskList;
