import './App.css';
import Bill from './components/Bill';
import Service from './components/Service';
import ServiceFrnd from './components/ServiceFrnd';
import React, { useState } from 'react';

function App() {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState(0);
  const [tipPercentF, setTipPercentF] = useState(0);

  let average = (tipPercent + tipPercentF) / 2;
  let total = bill + average;

  const resetAll = () => {
    setBill('');
    setTipPercent('');
    setTipPercentF('');
  };

  return (
    <>
      <Bill bill={bill} setBill={setBill} />
      <Service tipPercent={tipPercent} onTipChange={setTipPercent}>
        How did you like the service ?
      </Service>
      <ServiceFrnd tipPercentF={tipPercentF} onTipChange={setTipPercentF}>
        How did your friend like the service ?
      </ServiceFrnd>

      {bill && (
        <p>
          <b>
            You will pay ${total} ({bill} + ${average} tip)
          </b>
        </p>
      )}

      <button onClick={resetAll}>Reset</button>
    </>
  );
}

export default App;
