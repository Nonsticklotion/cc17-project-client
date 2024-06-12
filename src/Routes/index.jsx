import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "../layouts/MainContainer";
import HomePage from "../pages/HomePage";
import AdminOrder from "../pages/AdminOrder";
import AdminProduct from "../pages/AdminProduct";
import AdminContainer from "../pages/AdminHomeContainer";
import useAuth from "../hooks/useAuth";
// const guestOrUserrouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainContainer />,
//     children: [
//       { path: "/", element: <HomePage /> },
//     ],
//   },
// ]);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainContainer />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       {
//         path: "admin",
//         element: <AdminContainer />,
//         children: [
//           { path: "orders", element: <AdminOrder /> },
//           { path: "products", element: <AdminProduct /> },
//         ],
//       },
//     ],
//   },
// ]);

// export default function Router() {
//   return <RouterProvider router={router} />;
// }

export default function Router() {
  const { authUser } = useAuth();

  const guestOrUserRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
      children: [{ path: "/", element: <HomePage /> }],
    },
  ]);

  const adminRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "admin",
          element: <AdminContainer />,
          children: [
            { path: "orders", element: <AdminOrder /> },
            { path: "products", element: <AdminProduct /> },
          ],
        },
      ],
    },
  ]);

  return (
    <RouterProvider
      router={authUser?.isAdmin ? adminRouter : guestOrUserRouter}
    />
  );
}
