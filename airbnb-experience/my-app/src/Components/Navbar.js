import logo from '../Images/airbnb-logo.png';

function Navbar() {
  return (
    <nav className="Logo-container">
      <img className="Logo" src={logo} alt="Logo"></img>
    </nav>
  );
}

export default Navbar;
