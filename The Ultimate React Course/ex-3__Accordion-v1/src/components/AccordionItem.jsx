import React from 'react';
import { useState } from 'react';

const AccordionItem = ({ num, text, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="item" onClick={() => setIsOpen((isOpen) => !isOpen)}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};

export default AccordionItem;
