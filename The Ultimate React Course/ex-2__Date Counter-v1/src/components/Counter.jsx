import React, { useState } from 'react';

const Counter = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const today = new Date();
  today.setDate(today.getDate() + count);

  return (
    <div>
      <div className="step__container">
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        Step : {step}
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>
      <div className="count__container">
        <button onClick={() => setCount((count) => count - step)}>-</button>
        count : {count}
        <button onClick={() => setCount((count) => count + step)}>+</button>
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
    </div>
  );
};

export default Counter;
