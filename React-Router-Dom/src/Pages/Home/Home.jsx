import { Link } from 'react-router-dom';
import './Home.scss';

export default function Home() {
  return (
    <div className="Home-container">
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <div className="Home-link">
        <Link to="vans">Find your van</Link>
      </div>
    </div>
  );
}
