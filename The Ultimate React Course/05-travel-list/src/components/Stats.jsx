import React from 'react';

const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start Adding some items</em>
      </p>
    );
  }

  const numItems = items.length;
  const packed = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((packed / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? 'You have everything Covered ! '
          : ` You have ${numItems} items on your list, and you already packed (
        ${packedPercent}
        %)`}
      </em>
    </footer>
  );
};

export default Stats;
