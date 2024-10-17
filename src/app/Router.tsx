import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "*",
    element: <HomeLayout />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
