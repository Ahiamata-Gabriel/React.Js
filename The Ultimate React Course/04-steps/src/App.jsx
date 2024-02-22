import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Message from './components/Message';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function App() {
  let [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="steps">
      <div>
        <div className="numbers">
          <div className={step >= 1 ? 'active' : ''}>1</div>
          <div className={step >= 2 ? 'active' : ''}>2</div>
          <div className={step >= 3 ? 'active' : ''}>3</div>
        </div>
        <Message step={step}>{messages[step - 1]}</Message>
        <div className="buttons">
          <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
            <span>-</span> Previous
          </Button>
          <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
            Next <span>+</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
