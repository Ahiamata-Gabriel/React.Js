import React from 'react';
import pizzaData from '../assets/data';

export const Pizza = () => {
  // console.log(pizzaData);

  const name = pizzaData.map((pizza) => pizza.name);

  console.log(name);

  return (
    <div>
      <h1>Pizza Component</h1>
      <div>{name}</div>
    </div>
  );
};
