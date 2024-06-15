import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "../layouts/MainContainer";
import HomePage from "../pages/HomePage";
import Spinner from "../components/Spinner";
import ProfileContainer from "../layouts/ProfileContainer";
import ProtectedRoute from "../features/components/ProtectedRoute";
import Cart from "../layouts/Cart";

const AdminOrder = lazy(() => import("../pages/AdminOrder"));
const AdminProduct = lazy(() => import("../pages/AdminProduct"));
const AdminContainer = lazy(() => import("../pages/AdminHomeContainer"));
const AllProduct = lazy(() => import("../pages/AllProduct"));
const ProductDescription = lazy(() => import("../pages/ProductDescription"));

export default function Router() {
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
            {
              path: "orders",
              element: (
                <ProtectedRoute>
                  <AdminOrder />
                </ProtectedRoute>
              ),
            },
            {
              path: "products",
              element: (
                <ProtectedRoute>
                  <AdminProduct />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "cart",
          element: <Cart />,
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
