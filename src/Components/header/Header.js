import React from 'react';
import "./Header.css";
import DropdownJenis from "./Components/DropdownJenis";
import DropdownUser from "./Components/DropdownUser";
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
import Logo2 from "../../Picture/logo3.jpeg";

function Header() {
    return (
      <div style={{backgroundColor:'#d9d9d9'}}>
        <Row>
          <Col xs="2">
            <img width="50%" style={{margin: '10%', padding: '0%', marginBottom:'0%'}} src={Logo2} alt="Card image cap" />
          </Col>
          <Col xs="4">
            <Row>
                {/* <h3>Wohap Meubel</h3> */}
            </Row>
            <Row style={{marginTop: '17%'}}>
                <Col xs="3">
                    <DropdownJenis namaToogle="Minimalis"/>
                </Col>
                <Col xs="3">
                    <DropdownJenis namaToogle="Classical"/>
                </Col>
                <Col xs="3">
                    <DropdownJenis namaToogle="Vintage"/>
                </Col>
                <Col xs="3">
                    <DropdownJenis namaToogle="Casual"/>
                </Col>
            </Row>
          </Col>

          <Col xs="6">
            <Row>
                <Col xs="2"></Col>
                <Col xs="10">
                    <Nav style={{marginTop: '3%'}}>
                        <Col>
                            <NavItem>
                                <NavLink href="#" style={{color:'#666666',fontWeight:'bold'}}>AboutUs</NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink href="#" style={{color:'#666666',fontWeight:'bold'}}>ContactUs</NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink href="#" style={{color:'#666666',fontWeight:'bold'}}>Testimoni</NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink href="#" style={{color:'#666666',fontWeight:'bold'}}>Customize</NavLink>
                            </NavItem>
                        </Col>
                    </Nav>
                </Col>
            </Row>
            <Row style={{marginTop: '1%'}}>
                <Col xs="2"></Col>
                <Col xs="6">
                    <InputGroup style={{marginTop: '3%'}}>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Cari: </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="(Nama Barang)" />

                        <Button>Cari</Button>{' '}
                    </InputGroup>
                </Col>

                <Col xs="4">
                    <Nav>
                        <Col xs="6">
                            <NavItem>
                                <NavLink href="#"><DropdownUser/></NavLink>
                            </NavItem>
                        </Col>
                        <Col xs="6">
                            <NavItem>
                                <NavLink href="#"><Button ><FaCartPlus style={{color:'white',fontWeight:'bold'}}/></Button></NavLink>
                            </NavItem>
                        </Col>
                    </Nav>
                </Col>

            </Row>
          </Col>
        </Row>
        <hr style={{border: '2px solid', color: '#ffcc00'}}/>
        {/* #ffcc00 */}
      </div>
    );
  }
  
  export default Header;