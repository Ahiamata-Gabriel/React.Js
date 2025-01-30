import { useEffect } from "react";
import { getTrucks } from "../services/apiTrucks";

const Trucks = () => {
  useEffect(function () {
    getTrucks().then((data) => console.log(data));
  }, []);

  return <div>Trucks</div>;
};

export default Trucks;
