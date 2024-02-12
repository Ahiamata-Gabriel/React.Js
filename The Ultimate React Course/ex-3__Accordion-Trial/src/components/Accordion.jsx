import React from 'react';
import { faqs } from '../assets/Faqs';
import AccordionItem from './AccordionItem';

const Accordion = () => {
  return (
    <div className="Accordion">
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} faq={faq} />
      ))}
    </div>
  );
};

export default Accordion;
