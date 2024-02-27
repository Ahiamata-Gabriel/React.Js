import React from 'react';

const Button = ({ children, onclick }) => {
  return (
    <button onClick={onclick} className="button">
      {children}
    </button>
  );
};

export default Button;
