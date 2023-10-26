import React from 'react';
import ReactDOM from 'react-dom/client';
import Login, { loader as logInLoader } from './Login';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { requireAuth } from './utils';

import Layout from './Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<h1>Home page</h1>} />
      <Route
        path="protected"
        element={<h1>Super secret info here</h1>}
        loader={async () => await requireAuth()}
      />
      <Route path="login" loader={logInLoader} element={<Login />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
