import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Form from "./components/Form";
import CityList from "./components/CityList";
import CountriesList from "./components/CountryList";
import City from "./components/City";

const BASE_URL = "http://localhost:8000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);

  useEffect(function () {
    async function getCities() {
      try {
        SetIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("There was an error");
      } finally {
        SetIsLoading(false);
      }
    }
    getCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="products" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />

        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoadding={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoadding={isLoading} />}
          />
          <Route path="cities/:id" element={<City />}></Route>
          <Route
            path="countries"
            element={<CountriesList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
