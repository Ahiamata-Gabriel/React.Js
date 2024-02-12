import React from 'react';

const OutPut = ({ bill, tip }) => {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
};

export default OutPut;
