/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Button = ({ children, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="my-2 inline-block rounded-full bg-yellow-500 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default Button;
