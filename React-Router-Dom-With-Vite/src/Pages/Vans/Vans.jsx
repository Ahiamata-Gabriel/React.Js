import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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
      <Link to={van.id}>
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

  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="FilterLinks">
        {/* METHOD 1 */}
        {/* <Link className="simple" to={genNewSearchParamString('type', 'simple')}>
          Simple
        </Link>
        <Link className="rugged" to={genNewSearchParamString('type', 'rugged')}>
          Rugged
        </Link>
        <Link className="luxury" to={genNewSearchParamString('type', 'luxury')}>
          Luxury
        </Link>
        <Link className="Clear" to={genNewSearchParamString('type', null)}>
          Clear Filters
        </Link> */}
      </div>

      {/* METHOD 2 */}
      <div className="FilterLinks">
        <button
          onClick={() => handleFilterChange('type', 'simple')}
          className={`${typeFilter === 'simple' ? 'select-simple' : ''}`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange('type', 'rugged')}
          className={`${typeFilter === 'rugged' ? 'select-rugged' : ''}`}
        >
          rugged
        </button>
        <button
          onClick={() => handleFilterChange('type', 'luxury')}
          className={`${typeFilter === 'luxury' ? 'select-luxury' : ''}`}
        >
          luxury
        </button>
        {typeFilter ? (
          <button onClick={() => handleFilterChange('type', null)}>
            Clear
          </button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;

/* **** METHOD 2 for navigation searchParams *****
  (Using the setter function of searchParams) 
  ince button is not part of the react-router-dom ecosystem like Link*/

//   <button onClick={() => setSearchParams({ type: 'simple' })}>
//   Simple
// </button>
// <button onClick={() => setSearchParams({ type: 'rugged' })}>
//   rugged
// </button>
// <button onClick={() => setSearchParams({ type: 'luxury' })}>
//   luxury
// </button>
// <button onClick={() => setSearchParams({})}>Clear</button>

// NB: A string can be passed directly into the setter function
//eg:  <button onClick={() => setSearchParams("?type=luxury" )}>
//         luxury
//      </button>

// **** MORE INFO ****
{
  /* <button onClick={setSearchParams({ type: 'simple' })}>
   Simple
 </button> */
}
//  Using the setter function this  way is wrong because the
//   function is immidiately called when the component mounts.
//   Make sure to call it properly linke how it is done in METHOD 2.
//   in that case, the function get called only when the button is clicked
