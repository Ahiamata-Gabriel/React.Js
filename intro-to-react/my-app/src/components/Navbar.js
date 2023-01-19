import logo from '../images/React-icon.svg.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="React logo"></img>
      <h1 className="site-name">ReactFacts</h1>
      <h3 className="far-right">React Course - Project 1</h3>
    </nav>
  );
}
