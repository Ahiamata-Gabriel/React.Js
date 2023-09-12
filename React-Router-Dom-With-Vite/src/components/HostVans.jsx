import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HostVans.scss';

const HostVans = () => {
  const [vanss, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.error(error));
  }, []);

  const vansElements = vanss.map((van) => (
    <div key={van.id} className="Van-Container">
      <Link to={`/host/vans/${van.id}`}>
        <div className="Van-contents">
          <div className="Van-Image-container">
            <img src={van.imageUrl} alt="Van Image" />
          </div>
          <div className="Van-Name-x-price">
            <div>
              <h1>{van.name}</h1>
            </div>
            <div>
              <p>${van.price}/day</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="Vans-Page">
      <h3>Your listed vans</h3>
      {vansElements}
    </div>
  );
};

export default HostVans;
