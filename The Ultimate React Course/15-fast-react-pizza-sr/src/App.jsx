import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./ui/Home";
import Menu from "./ui/Menu";

createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

function App() {
  return <>Blood</>;
}

export default App;
