import "./App.css";
import Layout from "./component/Layout/Layout";
import Home from "./component/Home/Home";
import Cart from "./component/Cart/Cart";
import Brands from "./component/Brands/Brands";
import Categories from "./component/Categories/Categories";
import Products from "./component/Products/Products";
import NotFound from "./component/NotFound/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import AuthContextProvider from "./Contexts/AuthContext";
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute";
import ProtectedAuthRoutes from "./component/ProtectedAuthRoutes/ProtectedAuthRoutes";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import { ToastContainer } from 'react-toastify';
import ShippingAddress from "./component/ShippingAddress/ShippingAddress";
import AllOrders from "./component/AllOrders/AllOrders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WishList from "./component/WishList/WishList";
import ProductCategories from "./component/ProductCategories/ProductCategories";
import ForgetPassword from "./component/ForgetPassword/ForgetPassword";
import ResetCode from "./component/ResetCode/ResetCode";
import NewPassword from "./component/NewPassword/NewPassword";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element:<ProtectedRoute><Home /></ProtectedRoute>  },
        { path: "/register", element: <ProtectedAuthRoutes><Register /></ProtectedAuthRoutes>  },
        { path: "/login", element:<ProtectedAuthRoutes><Login /> </ProtectedAuthRoutes> },
        { path: "/cart", element:<ProtectedRoute><Cart /> </ProtectedRoute> },
        { path: "/products", element:<ProtectedRoute><Products /></ProtectedRoute>  },
        { path: "/categories", element: <ProtectedRoute><Categories /></ProtectedRoute> },
        { path: "/brands", element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: "/wishlist", element: <ProtectedRoute><WishList /></ProtectedRoute> },
        { path: "/productCategories/:catId", element: <ProtectedRoute><ProductCategories /></ProtectedRoute> },
        { path: "/shippingAddress/:cartId", element: <ProtectedRoute><ShippingAddress /></ProtectedRoute> },
        { path: "/allorders", element: <ProtectedRoute><AllOrders /></ProtectedRoute> },
        { path: "productDetails/:id", element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
        { path: "/forgetPassword", element: <ForgetPassword /> },
        { path: "/resetCode", element: <ResetCode /> },
        { path: "/newPassword", element: <NewPassword /> },
        
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <RouterProvider router={router}></RouterProvider>
          <ToastContainer />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
