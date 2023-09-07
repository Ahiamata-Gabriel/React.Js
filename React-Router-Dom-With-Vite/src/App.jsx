import './App.scss';
import Layout from './Components/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Vans from './Pages/Vans/Vans';
import VanDetails from './Pages/VanDetails/VanDetails';
import HostLayout from './Components/HostLayout';
import Dashboard from './Pages/Host/Dashboard';
import Reviews from './Pages/Host/Reviews';
import Income from './Pages/Host/Income';
import Vanss from './components/Vanss';
import { Routes, Route } from 'react-router-dom';

import './server';

function App() {
  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vanss" element={<Vanss />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
