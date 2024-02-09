import React, { useState } from 'react';

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.desc}
      </span>
      <button className="btn" onClick={() => onDeleteItem(item.id)}>
        &times;
      </button>
    </li>
  );
};

export default Item;
