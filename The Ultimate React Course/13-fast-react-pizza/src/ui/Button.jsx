/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type, onClick }) => {
  const base =
    "my-2 inline-block text-sm rounded-full bg-yellow-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 mb:px-6 mb:py-4",
    small: base + " py-2 mb:px-5 mb:py-2.5 px-4 text-xs",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "my-2 inline-block text-sm px-4 py-2.5 mb:px-6 mb:py-3.5 rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 hover:text-stone-800 focus:text-stone-800 transition-colors hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-1 disabled:cursor-not-allowed ",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
