// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MainContainer from "../layouts/MainContainer";
// import HomePage from "../pages/HomePage";
// import AdminOrder from "../pages/AdminOrder";
// import AdminProduct from "../pages/AdminProduct";
// import AdminContainer from "../pages/AdminHomeContainer";
// import useAuth from "../hooks/useAuth";
// import AllProduct from "../pages/AllProduct";
// import ProductDescription from "../pages/ProductDescription";
// import { Suspense } from "react";
// import Spinner from "../components/Spinner";

// export default function Router() {
//   const { authUser } = useAuth();

//   const guestOrUserRouter = createBrowserRouter([
//     {
//       path: "/",
//       element: <MainContainer />,
//       children: [
//         { path: "/", element: <HomePage /> },
//         { path: "allproduct", element: <AllProduct /> },
//         { path: "allproduct/:productId", element: <ProductDescription /> }
//       ],
//     },
//   ]);

//   const adminRouter = createBrowserRouter([
//     {
//       path: "/",
//       element: <MainContainer />,
//       children: [
//         { path: "/", element: <HomePage /> },
//         { path: "allproduct", element: <AllProduct /> },
//         { path: "product/:productId", element: <ProductDescription /> },
//         {
//           path: "admin",
//           element: <AdminContainer />,
//           children: [
//             { path: "orders", element: <AdminOrder /> },
//             { path: "products", element: <AdminProduct /> },
//           ],
//         },
//       ],
//     },
//   ]);

//   return (
//  <Suspense fallback={<Spinner />}>
//       <RouterProvider router={authUser?.isAdmin ? adminRouter : guestOrUserRouter} />
//     </Suspense>
//   );
// }

import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import MainContainer from "../layouts/MainContainer";
import HomePage from "../pages/HomePage";
import Spinner from "../components/Spinner";
import ProfileContainer from "../layouts/ProfileContainer";
import ProtectedRoute from "../features/components/ProtectedRoute";

const AdminOrder = lazy(() => import("../pages/AdminOrder"));
const AdminProduct = lazy(() => import("../pages/AdminProduct"));
const AdminContainer = lazy(() => import("../pages/AdminHomeContainer"));
const AllProduct = lazy(() => import("../pages/AllProduct"));
const ProductDescription = lazy(() => import("../pages/ProductDescription"));

export default function Router() {
  const { authUser } = useAuth();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "allproduct", element: <AllProduct /> },
        { path: "product/:productId", element: <ProductDescription /> },
        {
          path: "admin",
          element: (
            <ProtectedRoute>
              <AdminContainer />
            </ProtectedRoute>
          ),
          children: [
            { path: "orders", element: <AdminOrder /> },
            { path: "products", element: <AdminProduct /> },
          ],
        },
        { path: "profile", element: <ProfileContainer /> },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}
