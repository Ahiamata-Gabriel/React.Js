import { Link } from 'react-router-dom';
import './Header.scss';
import Host from '../Pages/Host/Dashboard';

const Header = () => {
  return (
    <>
      <header className="Header">
        <Link to="/" className="Navbar-logo">
          #VANLIFE
        </Link>
        <nav className="Navbar">
          <div className="Navbar-Links">
            <Link to="./host">Host</Link>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
