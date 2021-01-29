import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';


function Nav() {
    let currentH3 = '';
    const history = useHistory();

    if(history.location.pathname === "/"){
        currentH3 = <span>YOUR BALANCE</span>
    } else if(history.location.pathname === '/settings'){
        currentH3 = <span>YOUR SETTINGS</span>
    }

    return (
      <nav>
        <Link to="/settings">
          <FontAwesomeIcon icon={faAngleLeft} />
        </Link>
        {currentH3}
        <Link to="/">
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </nav>
    );
}

export default Nav
