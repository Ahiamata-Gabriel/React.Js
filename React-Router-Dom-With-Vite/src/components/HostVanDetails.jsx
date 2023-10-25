import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../api';
import { requireAuth } from '../utils';
import './HostVanDetails.scss';

export const loader = async ({ params }) => {
  await requireAuth();
  return getHostVans(params.id);
};

const HostVanDetails = () => {
  const data = useLoaderData();
  const van = data[0];

  return (
    <div className="Main-container">
      <Link to=".." relative="path">
        <h6>🔙Back to all vans</h6>
      </Link>

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

      <Outlet context={{ van }} />
    </div>
  );
};

export default HostVanDetails;
