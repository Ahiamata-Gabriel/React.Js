import { Link, useLocation, useLoaderData } from 'react-router-dom';
import { getVans } from '../../api';
import './VanDetails.scss';

export const loader = ({ params }) => {
  return getVans(params.id);
};

const VanDetails = () => {
  const location = useLocation();
  const van = useLoaderData();

  return (
    <div className="van-detail-container">
      <Link
        to={
          location.state.searchParams
            ? `..${location.state.searchParams}`
            : '..'
        }
        relative="path"
      >
        {location.state.type ? (
          <h6>🔙Back to {location.state.type} vans</h6>
        ) : (
          <h6>🔙Back to all vans</h6>
        )}
      </Link>

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
    </div>
  );
};

export default VanDetails;
