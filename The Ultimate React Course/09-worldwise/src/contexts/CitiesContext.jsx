import { createContext, useContext, useEffect, useState } from "react";
const BASE_URL = "http://localhost:9000";

const Citiescontext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("som went wrong");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      alert("something went wrong getting current city");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Citiescontext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </Citiescontext.Provider>
  );
};

function useCities() {
  const context = useContext(Citiescontext);
  if (context === undefined) {
    throw new Error("Cities context was used outside provider");
  }
  return context;
}

export { CitiesProvider, useCities };
