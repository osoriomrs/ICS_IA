import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import RootLayout from "./routes/RootLayout";
import HomePage from "./routes/HomePage";
import ProjectsPage, { loader as projectsLoader } from "./routes/ProjectsPage";
import ProjectDetailsPage, {
  loader as projectLoader,
  action as projectAction,
  taskAction
} from "./routes/ProjectDetailsPage";
import NewProjectPage, { action as newProjectAction } from "./routes/NewProjectPage";
import NewTaskPage, { action as newTaskAction } from "./routes/NewTaskPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "projects",
        children: [
          { index: true, element: <ProjectsPage />, loader: projectsLoader },
          { path: "new", element: <NewProjectPage />, action: newProjectAction },
          {
            path: ":projectId",
            element: <ProjectDetailsPage />,
            loader: projectLoader,
            action: projectAction,
            children: [
              { path: "new-task", element: <NewTaskPage />, action: newTaskAction },
              { path: "task/:taskId", action: taskAction }
            ]
          }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
