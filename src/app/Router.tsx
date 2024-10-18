import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeView from "../features/home/HomeView";
import { NotFound } from "../components";
import ProjectView from "../features/project/ProjectView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout children={<HomeView />} />,
  },
  {
    path: "/projects",
    element: <MainLayout children={<ProjectView />} />,
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
