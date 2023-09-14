import { NavLink, Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <>
      <header className="Header">
        <Link to="/" className="Navbar-logo">
          #VANLIFE
        </Link>
        <nav className="Navbar">
          <div className="Navbar-Links">
            <NavLink
              to=" /host"
              className={({ isActive }) => (isActive ? 'Active' : null)}
            >
              Host
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'Active' : null)}
            >
              About
            </NavLink>
            <NavLink
              to="/vans"
              className={({ isActive }) => (isActive ? 'Active' : null)}
            >
              Vans
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
