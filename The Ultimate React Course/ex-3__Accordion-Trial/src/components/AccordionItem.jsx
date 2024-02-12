import React from 'react';
import { useState } from 'react';

const AccordionItem = ({ faq }) => {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div className="Accordian__items">
      <div className="Accordion__title">
        <h3>{faq.title}</h3>
        <button onClick={toggleText}>-</button>
      </div>
      <div
        className="Accordion__Text"
        style={showText ? { display: 'block' } : {}}
      >
        <p> {faq.text}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
