import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./routes/RootLayout.jsx";
import ProjectsPage, { loader as projectsLoader } from "./routes/ProjectsPage.jsx";
import HomePage from "./routes/HomePage.jsx";
import NewProjectPage from "./routes/NewProjectPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects", element: <ProjectsPage />, loader: projectsLoader },
      { path: 'projects/new', element: <NewProjectPage />, action: newProjectAction }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
