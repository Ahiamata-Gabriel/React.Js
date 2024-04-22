import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="product" element={<Products />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
