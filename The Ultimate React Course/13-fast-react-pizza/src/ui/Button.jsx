/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type }) => {
  const base =
    "my-2 inline-block rounded-full bg-yellow-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 mb:px-6 mb:py-4",
    small: base + " py-2 mb:px-5 mb:py-2.5 px-4 text-xs",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
