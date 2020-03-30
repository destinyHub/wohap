import React, { Component } from 'react';
import Test from '../../318x180.svg';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col, Row, Container
} from 'reactstrap';
//import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { FaHeart } from "react-icons/fa";

class Produk extends React.Component {
    state = { isFavorite: false }

    render() {
        return (<>
        <FaHeart size={25} style={{ position: 'absolute', right: 25, top: 10, zIndex: 1000, color: this.state.isFavorite === true ? 'red' : '' }} onClick={() => {
            this.setState({
                isFavorite: !this.state.isFavorite
            })
        }} ></FaHeart>
            <Link to="/infobarang" style={{ textDecoration: 'none', color: '#666666', fontWeight: 'bold' }}>
                <Card style={{ width: '100%' }}>
                    <CardImg top src={Test} alt="Card image cap" />

                    <CardBody>
                        <CardTitle>Sofa</CardTitle>
                        <CardSubtitle>Rp 250.000</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card> </Link></>)
    }
}
export default Produk