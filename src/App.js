
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import './App.css'; 

const App = () => {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/"><h1>Task List</h1></Link>
            </li>
            <li>
              <Link to="/add"><h1>Add Task</h1></Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/add" element={<AddTask />} />
            <Route path="/edit/:id" element={<EditTask />} />
          </Routes>
        </div>
    </Router>
  );
};

export default App;
