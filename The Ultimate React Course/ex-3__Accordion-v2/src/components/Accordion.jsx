import { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          onOpen={setCurOpen}
          curOpen={curOpen}
          title={faq.title}
          num={index}
          key={faq.title}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
