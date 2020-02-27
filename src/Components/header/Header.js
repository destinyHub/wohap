import React from 'react';
import "./Header.css";
import DropdownJenis from "./Components/DropdownJenis";
import { Container, Row, Col, InputGroup } from 'reactstrap';
import { InputGroupAddon, InputGroupText, Input, Button  } from 'reactstrap';

import { FaCartPlus, FaUser } from "react-icons/fa";

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

function Header() {
    return (
      <div>
        <Row>
          <Col xs="2">
            <img width="30%" style={{margin: '0%', padding: '0%'}} src={Logo} alt="Card image cap" />
          </Col>
          <Col xs="4">
            <Row>
                {/* <h3>Wohap Meubel</h3> */}
            </Row>
            <Row>
                <Col xs="3" style={{marginTop: '5%'}}>
                    <DropdownJenis namaToogle="Minimalis"/>
                </Col>
                <Col xs="3" style={{marginTop: '5%'}}>
                    <DropdownJenis namaToogle="Classical"/>
                </Col>
                <Col xs="3" style={{marginTop: '5%'}}>
                    <DropdownJenis namaToogle="Vintage"/>
                </Col>
                <Col xs="3" style={{marginTop: '5%'}}>
                    <DropdownJenis namaToogle="Casual"/>
                </Col>
            </Row>
          </Col>

          <Col xs="6">
            <Row>
                <Col xs="2"></Col>
                <Col xs="10">
                    <Nav style={{marginTop: '1%'}}>
                        <Col>
                            <NavItem>
                                <NavLink href="#">AboutUs</NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink href="#">ContactUs</NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink href="#">Testimoni</NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink href="#">Costumize</NavLink>
                            </NavItem>
                        </Col>
                    </Nav>
                </Col>
            </Row>
            <Row>
                <Col xs="2"></Col>
                <Col xs="6">
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Cari: </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="(Nama Barang)" />

                        <Button color="primary">Cari</Button>{' '}
                    </InputGroup>
                </Col>

                <Col xs="4">
                    <Nav>
                        <Col>
                            <NavItem>
                            <NavLink href="#"><FaUser /></NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                            <NavLink href="#"><FaCartPlus /></NavLink>
                            </NavItem>
                        </Col>
                    </Nav>
                </Col>

            </Row>
          </Col>
        </Row>
        <hr />
        
      </div>
    );
  }
  
  export default Header;