import React, { Component } from 'react';
import Produk from './produk.js';
import {
    Col, Row, Container
} from 'reactstrap';
class KumpulanBarang extends React.Component {
    state = { arr: ['barang1', 'barang2', 'barang3', 'barang4'] }
    render() {
        return (
            <Container>
                <Row xs="4">
                    {this.state.arr.map(() => {
                        return (<Col>
                            <Produk></Produk>
                        </Col>)
                    })}
                </Row>

                <Row xs="4">
                    {this.state.arr.map(() => {
                        return (<Col>
                            <Produk></Produk>
                        </Col>)
                    })}
                </Row>

            </Container>
        );
    }

}

export default KumpulanBarang;
