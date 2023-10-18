import './App.scss';
import Layout from './Components/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Vans, { loader as vansLoader } from './Pages/Vans/Vans';
import VanDetails from './Pages/VanDetails/VanDetails';
import HostLayout from './Components/HostLayout';
import Dashboard from './Pages/Host/Dashboard';
import Reviews from './Pages/Host/Reviews';
import Income from './Pages/Host/Income';
import HostVans from './components/HostVans';
import HostVanDetails from './components/HostVanDetails';
import HostVanPricing from './components/HostVanPricing';
import HostVanInfo from './components/HostVanInfo';
import HostVanPhotos from './components/HostVanPhotos';
import NotFound from './Pages/404/NotFound';
import Error from './components/Error';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import './server';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route path="vans/:id" element={<VanDetails />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} />

        <Route path="vans/:id" element={<HostVanDetails />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photo" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="Container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
