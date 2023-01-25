import './App.css';
import Journal from './Components/Journal';
import Nav from './Components/Nav';
import Data from './Components/Data';

function App() {
  const Journals = Data.map((data) => {
    return <Journal key={data.title} data={data} />;
  });
  return (
    <div className="App">
      <Nav />
      {Journals}
    </div>
  );
}

export default App;
