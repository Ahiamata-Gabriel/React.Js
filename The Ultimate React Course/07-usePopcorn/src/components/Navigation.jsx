import Logo from './Logo';
import NumResults from './NumResults';
import Search from './Search';

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
};

export default Navigation;
