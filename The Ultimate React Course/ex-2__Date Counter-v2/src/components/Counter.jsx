import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [rangge, setRange] = useState(1);

  const today = new Date();
  today.setDate(today.getDate() + count);

  const resetAll = () => {
    setCount(0);
    setRange(1);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="10"
        value={rangge}
        onChange={(e) => setRange(Number(e.target.value))}
      />

      <p>Step: {rangge}</p>

      <div>
        <button onClick={() => setCount((count) => count - rangge)}>-</button>
        <input
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((count) => count + rangge)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? 'Today is : '
            : count > 0
            ? `${count} days from today is :`
            : `${Math.abs(count)} days ago was :`}
        </span>
        <span> {today.toDateString()}</span>
      </p>
      {count > 0 && <button onClick={resetAll}>reset</button>}
    </div>
  );
};

export default Counter;
