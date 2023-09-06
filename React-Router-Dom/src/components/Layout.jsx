import Header from './Header';
import Footer from './Footer';
import './Layout.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

// NB : Layout Route :
// Its the parent route of some nested routes that
// contains just the portion of the UI that will
// be shared. It will use an <Outlet/> component.
