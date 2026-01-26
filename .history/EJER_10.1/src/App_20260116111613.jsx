import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout.jsx';
import WelcomePage from './pages/WelcomePage.jsx';
import { countriesLoader } from './loaders/countriesLoader.js';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      id: 'root',
      loader: countriesLoader,
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <WelcomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
