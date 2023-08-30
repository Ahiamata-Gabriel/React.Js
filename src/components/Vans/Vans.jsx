import React, { useState } from 'react';
import { useEffect } from 'react';

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElement = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));

  return <>{vanElement}</>;
};

export default Vans;
