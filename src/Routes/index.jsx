import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MainContainer from "../layouts/MainContainer";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
