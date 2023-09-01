import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './VanDetails.scss';

const VanDetails = () => {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans))
      .catch((error) => console.error(error));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      <Link to="/vans">
        <h6>🔙Back to all vans</h6>
      </Link>

      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <div className=".btn-container">
            <button className="link-button">Rent this van</button>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetails;
