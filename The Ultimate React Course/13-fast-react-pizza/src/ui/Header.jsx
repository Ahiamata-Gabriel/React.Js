/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="border-b border-stone-200 bg-yellow-500 px-3 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast Pizza Company
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
