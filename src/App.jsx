import './App.scss';
import Layout from './Components/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Vans from './Pages/Vans/Vans';
import VanDetails from './Pages/VanDetails/VanDetails';
import Dashboard from './Pages/Host/Dashboard';
import Reviews from './Pages/Host/Reviews';
import Income from './Pages/Host/Income';
import { Routes, Route } from 'react-router-dom';

import './server';

function App() {
  return (
    <div className="Container">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/host" element={<Dashboard />}>
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
