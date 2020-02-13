import React from 'react';
import "./header.css";
import { Container, Row, Col, InputGroup } from 'reactstrap';
import { InputGroupAddon, InputGroupText, Input, Button  } from 'reactstrap';

import { FaCartPlus } from "react-icons/fa";

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

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

import Logo from "../../Picture/logo.jpg";

function header() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <img width="30%" style={{marginBottom: '0%'}} src={Logo} alt="Card image cap" />
          </Col>
          <Col xs="4">
            <h1 style={{marginTop: '5%'}}>WOHAP MEUBEL</h1>
          </Col>
          <Col xs="4">
            <Nav style={{marginTop: '3%'}}>
              <Col>
                <NavItem>
                  <NavLink href="https://google.com"><FaCartPlus /></NavLink>
                </NavItem>
              </Col>
              <Col>
                <NavItem>
                  <NavLink href="#">Buat Akun</NavLink>
                </NavItem>
              </Col>
              <Col>
                <NavItem>
                  <NavLink href="#">Masuk</NavLink>
                </NavItem>
              </Col>
            </Nav>
            <Col>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>Pencarian: </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="masukan nama barang disini" />

                <Button color="primary">Cari</Button>{' '}
              </InputGroup>
            </Col>
          </Col>
        </Row>
        <hr />
        
      </div>
    );
  }
  
  export default header;