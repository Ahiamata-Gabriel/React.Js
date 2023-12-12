import { NavLink, Link } from 'react-router-dom';
import imgUrl from '../assets/images/avatar-icon.png';
import './Header.scss';

const Header = () => {
  const fakeLogOut = () => {
    localStorage.removeItem('loggedin');
  };

  return (
    <>
      <header className="Header">
        <Link to="/" className="Navbar-logo">
          #VANLIFE
        </Link>
        <nav className="Navbar">
          <div className="Navbar-Links">
            <NavLink
              to="/host"
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
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'Active' : null)}
            >
              {/* <img src={imgUrl} className="Login-icon" alt="" /> */}
              Login
            </NavLink>
            <button onClick={fakeLogOut}>X</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
