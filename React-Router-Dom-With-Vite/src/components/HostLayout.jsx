import { NavLink, Outlet } from 'react-router-dom';
import './HostLayout.scss';

const HostLayout = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/host"
          end
          className={({ isActive }) => (isActive ? 'Active' : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) => (isActive ? 'Active' : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vanss"
          end
          className={({ isActive }) => (isActive ? 'Active' : null)}
        >
          Vanss
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) => (isActive ? 'Active' : null)}
        >
          Review
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
