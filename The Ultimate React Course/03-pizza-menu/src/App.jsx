import './App.css';
import './components/Pizza';
import Pizza from './components/pizza';
import pizzaData from './assets/data';

function App() {
  return (
    <>
      HEllo !!!
      <Pizza Pizza={pizzaData} />
    </>
  );
}

export default App;
