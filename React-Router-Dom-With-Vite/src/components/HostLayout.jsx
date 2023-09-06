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
          to="/host/vans"
          end
          className={({ isActive }) => (isActive ? 'Active' : null)}
        >
          Vans
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
