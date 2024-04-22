import { NavLink } from "react-router-dom";
const PageNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">product</NavLink>
        </li>
        <li>
          <NavLink to="/product">Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
