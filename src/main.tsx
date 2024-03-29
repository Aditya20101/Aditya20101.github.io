import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GrayApp } from './sections/App';
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import { ProjectsPage } from './sections/pages/ProjectsPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <GrayApp />,
  },{
    path:'/projects',
    element: <ProjectsPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);



// ReactDOM.render((
//    <BrowserRouter basename={process.env.PUBLIC_URL}>
//      <App />
//    </BrowserRouter>
// ),)  