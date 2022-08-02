import './App.css';
import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap'

function App() {
  return (
    <Nav
      fill
      justified
    >
      <NavItem>
        <NavLink
          active
          href="#"
        >
          Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          Another Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          disabled
          href="#"
        >
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default App;
