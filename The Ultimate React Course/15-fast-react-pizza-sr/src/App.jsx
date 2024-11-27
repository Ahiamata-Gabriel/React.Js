import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./ui/Home";
import Menu from "./ui/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
