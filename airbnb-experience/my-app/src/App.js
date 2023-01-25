import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Data from './Components/Data';

function App() {
  const Cards = Data.map((data) => {
    return <Card key={data.id} data={data} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="Cards-list">{Cards}</section>
    </div>
  );
}

export default App;
