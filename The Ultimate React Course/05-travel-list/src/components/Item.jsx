import React from 'react';

const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="btn">&times;</button>
    </li>
  );
};

export default Item;
