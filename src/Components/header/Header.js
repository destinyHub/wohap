import React from 'react';
import "./Header.css";
import DropdownJenis from "./Components/DropdownJenis";
import DropdownSprinBed from "./Components/DropdownSpringBed";
import DropdownUser from "./Components/DropdownUser";
import { Row, Col, InputGroup } from 'reactstrap';
import { InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

import { FaCartPlus, FaSearch, FaHeart } from "react-icons/fa";

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
    pencari =
        <InputGroup size="lg" style={{ marginTop: '1%' }}>
            <Input placeholder="(Nama Barang)" />
            <Button id="searchBtn" alignSelf='right' color=""><FaSearch size={25} style={{ color: 'black'}} /></Button>
        </InputGroup>;

    klasifikasiBarang =
        <Row style={{ marginTop: '17%'}}>
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
                <DropdownSprinBed namaToogle="Spring bed" />
            </Col>
        </Row>;

    function handleClick() {
        // props.footer.current.focus();
        window.scrollTo(0, 1280);
    }

    return (
        <div style={{ backgroundColor: 'white' }}>
            <Row>

                <Col xs="2">
                    <Link to="/"><img width="50%" style={{ margin: '10%', padding: '0%', marginBottom: '0%' }} src={Logo2} alt="Card image cap" /></Link>
                </Col>
                <Col xs="4">
                    {klasifikasiBarang}
                </Col>

                <Col xs="6">
                    <Row>
                        <Col xs="1"></Col>
                        <Col xs="11">
                            <Nav style={{ marginTop: '3%' }}>
                                <Col>
                                    <NavItem>
                                        <NavLink href="#" onClick={() => {
                                            return axios.get("http://localhost:3001/")
                                                .then(res => {
                                                    console.log(res.status === 200 ? res.data.values : console.log("error"));
                                                })
                                        }}> <Link to="/about" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>AboutUs</Link> </NavLink>
                                    </NavItem>
                                </Col>
                                <Col>
                                    <NavItem>
                                        <NavLink href="/testimoni" style={{ color: 'black', fontWeight: 'bold' }}>Testimoni</NavLink>
                                    </NavItem>
                                </Col>
                                <Col>
                                    <NavItem>
                                        <NavLink href="#" style={{ color: 'black', fontWeight: 'bold' }}>Customize</NavLink>
                                    </NavItem>
                                </Col>
                                <Col>
                                    <NavItem>
                                        <NavLink href="#" style={{ color: 'black', fontWeight: 'bold' }} onClick={handleClick}>Contact Us</NavLink>
                                    </NavItem>
                                </Col>
                            </Nav>
                        </Col>
                    </Row>


                    <Row style={{ marginTop: '1%' }}>
                        <Col xs="2"></Col>

                        <Col xs="10">
                            <Nav>
                                <Col xs="6">
                                    <NavItem>
                                        {pencari}
                                    </NavItem>
                                </Col>
                                <Col xs="2">
                                    <NavItem>
                                        <NavLink href="#"><DropdownUser /></NavLink>
                                    </NavItem>
                                </Col>
                                <Col xs="2" style={{ marginTop: '1%', paddingRight: '0%' }}>
                                    <NavItem>
                                        <NavLink href="#"><Button style={{ padding: '0%', margin: '0%' }} color=""><FaHeart size={25} style={{ color: 'black'}} /></Button></NavLink>
                                    </NavItem>
                                </Col>
                                <Col xs="2" style={{ marginTop: '1%', paddingLeft: '0%' }}>
                                    <NavItem>
                                        <NavLink href="#"><Button style={{ padding: '0%', margin: '0%' }} color=""><FaCartPlus size={25} style={{ color: 'black'}} /></Button></NavLink>
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