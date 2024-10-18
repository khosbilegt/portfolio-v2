import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeView from "../features/home/HomeView";

const router = createBrowserRouter([
  {
    path: "*",
    element: <MainLayout children={<HomeView />} />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
