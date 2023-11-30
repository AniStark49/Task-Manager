
import React, { useState, useEffect } from 'react';
import './EditTask.css';

const EditTask = ({ editedTask, updateTask, onClose }) => {
  const [editedName, setEditedName] = useState(editedTask.name);
  const [editedDescription, setEditedDescription] = useState(editedTask.description);
  const [editedPriority, setEditedPriority] = useState(editedTask.priority);

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === 'Escape' && onClose();
    };

    window.addEventListener('keydown', closeModalIfEscaped);

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped);
    };
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({
      ...editedTask,
      name: editedName,
      description: editedDescription,
      priority: editedPriority,
    });
    onClose();
  };

  return (
    <div className="edit-task-overlay" onClick={onClose}>
    <div className="edit-task-container" onClick={(e) => e.stopPropagation()}>
      <h2 className="edit-task-header">Edit Task</h2>
      <form className="edit-task-form"onSubmit={handleSubmit}>
        <label>
           Edit Task Name :
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        </label>
        <label>
        Edit Task Description :
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          ></textarea>
        </label>
        <label>
        Edit Priority :
          <select
            value={editedPriority}
            onChange={(e) => setEditedPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
    </div>
  );
};

export default EditTask;
