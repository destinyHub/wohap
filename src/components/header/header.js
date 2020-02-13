import React from 'react';
import "./header.css";
import { Container, Row, Col } from 'reactstrap';

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
            <Col>
              <NavItem>
                <NavLink href="https://google.com">Google</NavLink>
              </NavItem>
            </Col>
            <Col>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
            </Col>
            <Col>
              <NavItem>
                <NavLink href="#">Another Link</NavLink>
              </NavItem>
            </Col>
            <Col>
              <NavItem>
                <NavLink disabled href="#">Disabled Link</NavLink>
              </NavItem>
            </Col>
          </Nav>  
        <hr />
        
      </div>
    );
  }
  
  export default header;