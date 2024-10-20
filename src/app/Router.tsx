import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeView from "../features/home/HomeView";
import { NotFound } from "../components";
import ProjectListView from "../features/project/ProjectListView";
import ProjectView from "../features/project/ProjectView";

const router = createBrowserRouter([
  {
    path: "/projects/:projectId",
    element: <MainLayout children={<ProjectView />} />,
  },
  {
    path: "/projects",
    element: <MainLayout children={<ProjectListView />} />,
  },
  {
    path: "/",
    element: <MainLayout children={<HomeView />} />,
  },
  {
    path: "*",
    element: <MainLayout children={<NotFound />} />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
