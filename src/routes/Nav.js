import React from 'react';
import {Link, useLocation} from 'react-router-dom';

function Nav() {
 
  const location = useLocation();
  let title = "";

    if (location.pathname === "/") {
      title = "HOME";
    } else if (location.pathname === "/settings") {
      title = "Settings";
    }

  return (
    <nav>
      <Link to="/settings">
      &#10094;
      </Link>
      <span id="navTitle">{title}</span>
      <Link to="/">
      &#10095;	
      </Link>
    </nav>
  );
}

export default Nav;
