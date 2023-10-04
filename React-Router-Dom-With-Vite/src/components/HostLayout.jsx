import { NavLink, Outlet } from 'react-router-dom';
import './HostLayout.scss';

const HostLayout = () => {
  return (
    <>
      <nav>
        <NavLink
          to="."
          end //tells react-router-dom to end matching here.
          className={({ isActive }) => (isActive ? 'Active' : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => (isActive ? 'Active' : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          end
          className={({ isActive }) => (isActive ? 'Active' : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
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
