import React from 'react';
import "./header.css";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

  import { Link } from 'react-router-dom';

//   import logo from '../../Picture/';

function header() {
    return (
      <div>
        <p>Wohap</p>
        <Nav>
          <NavItem>
            <NavLink href="https://google.com">Google</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <hr />
        
      </div>
    );
  }
  
  export default header;