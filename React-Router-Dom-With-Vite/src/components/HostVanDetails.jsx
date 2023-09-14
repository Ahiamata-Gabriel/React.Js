import { useParams, Link, NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './HostVanDetails.scss';

const HostVanDetails = () => {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans[0]))
      .catch((error) => console.error(error));
  }, [params.id]);

  return (
    <div className="Main-container">
      <Link to=".." relative="path">
        <h6>🔙Back to all vans</h6>
      </Link>
      {van ? (
        <div>
          <div className="Van-container">
            <div className="Van-Image-container">
              <img src={van.imageUrl} alt="" />
            </div>
            <div className="Van-Details-container">
              <p className={van.type}>{van.type}</p>
              <h2>{van.name}</h2>
              <h3>${van.price}/day</h3>
            </div>
          </div>
          <nav className="DetailsNav">
            <NavLink
              to="."
              end
              className={({ isActive }) => (isActive ? 'Active' : null)}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) => (isActive ? 'Active' : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photo"
              end
              className={({ isActive }) => (isActive ? 'Active' : null)}
            >
              Photos
            </NavLink>
          </nav>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
      <Outlet context={{ van }} />
    </div>
  );
};

export default HostVanDetails;
