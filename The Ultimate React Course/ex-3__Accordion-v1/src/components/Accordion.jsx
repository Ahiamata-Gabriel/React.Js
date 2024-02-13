import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          title={faq.title}
          text={faq.text}
          num={index}
          key={faq.title}
        />
      ))}
    </div>
  );
};

export default Accordion;
