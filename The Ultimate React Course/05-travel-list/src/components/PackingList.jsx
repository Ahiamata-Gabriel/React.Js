import React from 'react';
import { Items } from '../assets/items';
import Item from './Item';

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {Items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
