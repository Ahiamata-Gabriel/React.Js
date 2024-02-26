import './App.css';
import Accordion from './components/Accordion';
import { faqs } from './assets/Faqs';

function App() {
  return (
    <>
      <Accordion data={faqs} />
    </>
  );
}

export default App;
