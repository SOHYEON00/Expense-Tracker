import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
      <nav>
        <Link to="/settings">
          <FontAwesomeIcon icon={faAngleLeft} />
        </Link>
        <span></span>
        <Link to="/">
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </nav>
    );
}

export default Nav
