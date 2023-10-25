import './App.scss';
import Layout from './Components/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Vans, { loader as vansLoader } from './Pages/Vans/Vans';
import VanDetails, {
  loader as vansDetailsLoader,
} from './Pages/VanDetails/VanDetails';
import HostLayout from './Components/HostLayout';
import Dashboard from './Pages/Host/Dashboard';
import Reviews from './Pages/Host/Reviews';
import Income from './Pages/Host/Income';
import HostVans, { loader as hostVansLoader } from './components/HostVans';
import HostVanDetails, {
  loader as hostVansDetailsLoader,
} from './components/HostVanDetails';
import HostVanPricing from './components/HostVanPricing';
import HostVanInfo from './components/HostVanInfo';
import HostVanPhotos from './components/HostVanPhotos';
import NotFound from './Pages/404/NotFound';
import Error from './components/Error';
import Login from './Pages/Login';
import { requireAuth } from './utils';

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
      <Route path="login" element={<Login />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={vansDetailsLoader}
      />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />

        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={hostVansDetailsLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="photo"
            element={<HostVanPhotos />}
            loader={async () => await requireAuth()}
          />
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
