import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="Main-container">
      <h3>Sorry, the page you were looking for was not found.</h3>
      <div className="Btn-box">
        <Link to="/">
          <button>Return to home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
