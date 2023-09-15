import { useEffect, useState } from 'react';
import { Link, NavLink, useSearchParams } from 'react-router-dom';
import './Vans.scss';

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get('type');

  useEffect(() => {
    fetch('/api/vans')
      .then((response) => response.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.error(error));
  }, []);

  // if there is a typeFilter,
  // then filter and display vans base on the type,
  // else display all vans
  const vansToDisplay = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = vansToDisplay.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="FilterLinks">
        <NavLink className="simple" to="?type=simple">
          Simple
        </NavLink>
        <NavLink className="rugged" to="?type=rugged">
          Rugged
        </NavLink>
        <NavLink className="luxury" to="?type=luxury">
          Luxury
        </NavLink>
        <Link className="Clear" to=".">
          Clear Filters
        </Link>
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
