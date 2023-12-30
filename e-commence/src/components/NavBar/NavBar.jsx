import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="Container">
      <div className="Wrapper">
        <div className="Left">
          EN
          <input className="SearchInput" type="text" />
        </div>
        <div className="Center">Mogul.Inc</div>
        <div className="Right">Cart 4 </div>
      </div>
    </div>
  );
};

export default NavBar;
