import React from 'react';

const Pizza = ({ Pizza }) => {
  const pizzaEl = Pizza.map((pizza) => {
    return pizza;
  });

  return <div>{pizzaEl.name}</div>;
};

export default Pizza;
