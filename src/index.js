import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateTask from './features/tasks/task';
import CreateSubTask from './features/tasks/subtask';
import GetTask from './features/tasks/gettask';
import GetSubTask from './features/tasks/getsubtask';
import UpdateTask from './features/tasks/updatetask';
import UpdateSubTask from './features/tasks/updatesubtask';
import DeleteTask from './features/tasks/deletetask';
import DeleteSubTask from './features/tasks/deletesubtask';
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/task",
        element:<CreateTask></CreateTask>
      },
      {
        path:"/subtask",
        element:<CreateSubTask></CreateSubTask>
      },
      {
        path:"/gettask",
        element:<GetTask></GetTask>
      },
      {
        path:"/getsubtask",
        element:<GetSubTask></GetSubTask>
      },
      {
        path:"/updatetask",
        element:<UpdateTask></UpdateTask>
      },
      {
        path:"/updatesubtask",
        element:<UpdateSubTask></UpdateSubTask>
      },
      {
        path:"/deletetask",
        element:<DeleteTask></DeleteTask>
      },
      {
        path:"/deletesubtask",
        element:<DeleteSubTask></DeleteSubTask>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

