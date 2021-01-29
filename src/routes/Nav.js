import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
        <nav>
          <button><FontAwesomeIcon icon={faAngleLeft}/></button>
          <h3>YOUR BALANCE</h3>
          <button><FontAwesomeIcon icon={faAngleRight}/></button>
        </nav>
    )
}

export default Nav
