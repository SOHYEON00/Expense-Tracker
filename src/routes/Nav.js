import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';


function Nav() {
  const location = useLocation();
  let title = "";

    if (location.pathname === "/") {
      title = "Home";
    } else if (location.pathname === "/settings") {
      title = "Settings";
    }

  return (
    <nav>
      <Link to="/settings">
        <FontAwesomeIcon icon={faAngleLeft} />
      </Link>
      <span>{title}</span>
      <Link to="/">
        <FontAwesomeIcon icon={faAngleRight} />
      </Link>
    </nav>
  );
}

export default Nav;
