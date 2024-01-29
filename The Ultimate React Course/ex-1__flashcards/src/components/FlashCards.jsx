import React, { useState } from 'react';
import { questions } from '../assets/data';

const FlashCards = () => {
  const [seletedId, setseletedId] = useState(null);

  const handleClick = (id) => {
    setseletedId(id !== seletedId ? id : null);
  };

  const quest = questions.map((question) => (
    <div
      key={question.id}
      className={question.id === seletedId ? 'selected' : ''}
      // onClick={() => setseletedId(question.id)}
      onClick={() => handleClick(question.id)}
    >
      {seletedId === question.id ? (
        <p>{question.answer}</p>
      ) : (
        <p>{question.question}</p>
      )}
    </div>
  ));
  return <div className="flashcards">{quest}</div>;
};

export default FlashCards;
