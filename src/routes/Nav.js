import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function Nav() {
  const Title = styled.span`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    font-family: Montserrat, sans-serif;
  `;

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
