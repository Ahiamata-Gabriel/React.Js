import React from 'react';

const BillInput = ({ bill, onSetBill }) => {
  return (
    <div>
      <label htmlFor="">How much was the bill ?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
        placeholder="Bill value"
      />
    </div>
  );
};

export default BillInput;
