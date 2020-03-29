import React, { Component } from 'react';
import Header from "../Components/header/Header";
import toko from "../Picture/toko.jpg";
import {
    Container, Row, Col
} from 'reactstrap';

class About extends Component {
    render() {
        return (
            <div>
                <Header />
                    <Row xs="12">
                        <Col xs="12">
                            <img style={{ width: '100%', height: '800px' }} src={toko} alt="Smiley face" />
                            <h2 style={{textAlign: 'center'}}>Toko Wohap Meubel</h2>
                            <p>Toko Wohap Meubel sudah berdiri sejak tahun 1990, dipercaya dalam memenuhi kebutuhan pelanggan dengan furniture dan dekorasi yang berkualitas.</p>
                        </Col>
                    </Row>              
            </div>
        );
    }
}

export default About;