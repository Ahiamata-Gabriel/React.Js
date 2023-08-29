import './App.scss';
import Home from './components/Home';
import About from './Components/About';
import Vans from './components/Vans';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="Container">
        <header className="Header">
          <Link to="/" className="Navbar-logo">
            #VANLIFE
          </Link>
          <nav className="Navbar">
            <div className="Navbar-Links">
              <Link to="/about">About</Link>
              <Link to="/vans">Vans</Link>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
