import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import HomePage from "./routes/HomePage";
import ProjectsPage from "./routes/ProjectsPage";
import ProjectDetailsPage from "./routes/ProjectDetailsPage";
import NewProjectPage from "./routes/NewProjectPage";
import NewTaskPage from "./routes/NewTaskPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "projects/new", element: <NewProjectPage /> },
      { path: "projects/:projectId", element: <ProjectDetailsPage /> },
      { path: "projects/:projectId/new-task", element: <NewTaskPage /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
