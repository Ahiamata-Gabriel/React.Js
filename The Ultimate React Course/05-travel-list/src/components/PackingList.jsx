import React, { useState } from 'react';
import Item from './Item';

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearItems }) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') {
    sortedItems = items;
  }

  if (sortBy === 'description') {
    sortedItems = items
      .slice()
      .sort((a, b) => a.desc.localeCompare(b.description));
  }

  if (sortBy === 'packed') {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input"> sort by input order</option>
          <option value="description"> sort by description</option>
          <option value="packed"> sort by packed status</option>
        </select>

        <button onClick={onClearItems}>Clear</button>
      </div>
    </div>
  );
};

export default PackingList;
