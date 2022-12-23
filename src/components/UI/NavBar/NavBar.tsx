import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="nabBar__links">
        <Link 
          to="./about"
        >About site</Link>
        <Link 
          to="./posts"
        >Posts</Link>
      </div>
    </div>
  );
};

export default NavBar;