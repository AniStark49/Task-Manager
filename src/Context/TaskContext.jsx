import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  const addTask = (task) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks, task];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return newTasks;
    });
  };
   
  const toggleTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const editTask = (taskId, updatedTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => (task.id === taskId ? { ...task, ...updatedTask } : task));
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const value = { tasks, addTask, toggleTask, deleteTask, editTask };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};


export default TaskContextProvider;
