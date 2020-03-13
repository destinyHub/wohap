import React from 'react';
import "./Header.css";
import DropdownJenis from "./Components/DropdownJenis";
import DropdownUser from "./Components/DropdownUser";
import { Row, Col, InputGroup } from 'reactstrap';
import { InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

import { FaCartPlus } from "react-icons/fa";

import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import { Link } from 'react-router-dom';

import Logo2 from "../../Picture/logo3.jpeg";
import axios from "axios";

function Header(props) {
    let pencari, klasifikasiBarang;

    if (props.page == "home") {
        pencari =
            <InputGroup style={{ marginTop: '3%' }}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Cari: </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="(Nama Barang)" />

                <Button>Cari</Button>{' '}
            </InputGroup>;

        klasifikasiBarang =
            <Row style={{ marginTop: '17%' }}>
                <Col xs="3">
                    <DropdownJenis namaToogle="Minimalis" />
                </Col>
                <Col xs="3">
                    <DropdownJenis namaToogle="Classical" />
                </Col>
                <Col xs="3">
                    <DropdownJenis namaToogle="Vintage" />
                </Col>
                <Col xs="3">
                    <DropdownJenis namaToogle="Casual" />
                </Col>
            </Row>;
    }

    function handleClick() {
        props.footer.current.focus();
    }
    
    return (
        <div style={{ backgroundColor: '#d9d9d9' }}>
            <Row>
<<<<<<< Updated upstream
                <Col xs="2"></Col>
                <Col xs="10">
                    <Nav style={{marginTop: '3%'}}>
                        <Col>
                            <NavItem>
                                <NavLink href="#" onClick={ () => {
                                   return  axios.get("http://localhost:3001/")
                                       .then(res => {
                                           console.log(res.status === 200 ? res.data.values : console.log("error"));
                                       })
                                }}> <Link to="/about" style={{ textDecoration: 'none',color:'#666666',fontWeight:'bold'}}>AboutUs</Link> </NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink href="#" style={{color:'#666666',fontWeight:'bold'}} onClick={handleClick}>ContactUs</NavLink>
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
=======
                <Col xs="2">
                    <Link to="/"><img width="50%" style={{ margin: '10%', padding: '0%', marginBottom: '0%' }} src={Logo2} alt="Card image cap" /></Link>
                </Col>
                <Col xs="4">
                    {klasifikasiBarang}
>>>>>>> Stashed changes
                </Col>

                <Col xs="6">
                    <Row>
                        <Col xs="2"></Col>
                        <Col xs="10">
                            <Nav style={{ marginTop: '3%' }}>
                                <Col>
                                    <NavItem>
                                        <NavLink href="#" onClick={() => {
                                            return axios.get("http://localhost:3001/")
                                                .then(res => {
                                                    console.log(res.status === 200 ? res.data.values : console.log("error"));
                                                })
                                        }}> <Link to="/about" style={{ textDecoration: 'none', color: '#666666', fontWeight: 'bold' }}>AboutUs</Link> </NavLink>
                                    </NavItem>
                                </Col>
                                <Col>
                                    <NavItem>
                                        <NavLink href="#" style={{ color: '#666666', fontWeight: 'bold' }}>ContactUs</NavLink>
                                    </NavItem>
                                </Col>
                                <Col>
                                    <NavItem>
                                        <NavLink href="#" style={{ color: '#666666', fontWeight: 'bold' }}>Testimoni</NavLink>
                                    </NavItem>
                                </Col>
                                <Col>
                                    <NavItem>
                                        <NavLink href="#" style={{ color: '#666666', fontWeight: 'bold' }}>Customize</NavLink>
                                    </NavItem>
                                </Col>
                            </Nav>
                        </Col>
                    </Row>


                    <Row style={{ marginTop: '1%' }}>
                        <Col xs="2"></Col>
                        <Col xs="6">
                            {pencari}
                        </Col>

                        <Col xs="4">
                            <Nav>
                                <Col xs="6">
                                    <NavItem>
                                        <NavLink href="#"><DropdownUser /></NavLink>
                                    </NavItem>
                                </Col>
                                <Col xs="6">
                                    <NavItem>
                                        <NavLink href="#"><Button ><FaCartPlus style={{ color: 'white', fontWeight: 'bold' }} /></Button></NavLink>
                                    </NavItem>
                                </Col>
                            </Nav>
                        </Col>

                    </Row>
                </Col>
            </Row>
            <hr style={{ border: '2px solid', color: '#ffcc00' }} />
            {/* #ffcc00 */}
        </div>
    );
}

export default Header;