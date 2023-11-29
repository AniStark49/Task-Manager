import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import TaskContextProvider from './Context/TaskContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TaskContextProvider>
    <App />
  </TaskContextProvider>
);


