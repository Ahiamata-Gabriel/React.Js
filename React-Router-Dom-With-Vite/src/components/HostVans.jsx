import { Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../api';
import { requireAuth } from '../utils';
import './HostVans.scss';

export const loader = async () => {
  await requireAuth();
  return getHostVans();
};

const HostVans = () => {
  const vanss = useLoaderData();

  const vansElements = vanss.map((van) => (
    <div key={van.id} className="Van-Container">
      <Link to={van.id}>
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
