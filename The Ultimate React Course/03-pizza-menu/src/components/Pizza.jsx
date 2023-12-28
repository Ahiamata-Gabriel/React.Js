import React from 'react';

const Pizza = ({ Pizza }) => {
  const pizzaEl = Pizza.map((pizza) => (
    <div key={pizza.name}>
      <h1>{pizza.name}</h1>
    </div>
  ));

  return <div>{pizzaEl}</div>;
};

export default Pizza;
