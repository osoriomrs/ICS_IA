import React, { Suspense, lazy } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';

import HomePage from './pages/HomePage.jsx';
import PostsListPage from './pages/PostsListPage.jsx';
import PostDetailPage from './pages/PostDetailPage.jsx';
import TaskListPage from './pages/TaskListPage.jsx';
import NewTaskPage from './pages/NewTaskPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const ProfilePage = lazy(() => import('./pages/ProfilePage.jsx'));

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'posts', element: <PostsListPage /> },
        { path: 'posts/:postId', element: <PostDetailPage /> },
        {
          path: 'dashboard',
          element: <DashboardLayout />,
          children: [
            { index: true, element: <TaskListPage /> },
            { path: 'new', element: <NewTaskPage /> },
            { path: 'task/:taskId', element: <TaskListPage /> }, // Se puede mejorar para detalle
          ],
        },
        {
          path: 'profile',
          element: (
            <Suspense fallback={<div>Cargando...</div>}>
              <ProfilePage />
            </Suspense>
          ),
        },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
