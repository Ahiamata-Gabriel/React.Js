import { Outlet, NavLink } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <h1> Welcome to my page</h1>
      <nav>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
          Contact
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
