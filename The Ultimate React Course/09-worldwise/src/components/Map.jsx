import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>
        {lat}, {lng}
      </h1>
    </div>
  );
};

export default Map;
