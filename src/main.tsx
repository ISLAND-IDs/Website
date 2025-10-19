import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'; // 최상위 레이아웃 컴포넌트, 공통 레이아웃
import HomePage from './pages/Home';
import SubmitPage from './pages/id_submit';
import About from './pages/about';
import SongPage from './pages/song';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage/> },
      { path: 'submission', element: <SubmitPage /> },
      { path: 'about', element: <About/> },
      { path: 'song/:id', element: <SongPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
