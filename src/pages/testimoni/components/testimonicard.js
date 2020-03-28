import React, { Component } from 'react';
import { Card, CardBody, Row, Col, Container } from 'reactstrap';

class TestimoniCard extends Component {
    render() {
        return (
            <Container className={"mt-3"}>
                    <Row>
                        <Col xs="7" sm="5" md="5"
                                    lg="5" xl="3">
                            <img src={this.props.src} style={{ width: "100%" }} />
                        </Col>
                        <Col xs="5" sm="7" md="7"
                                    lg="7" xl="9">
                            <h4>{this.props.pernyataan}
                            </h4>
                            <span style={{ position: "absolute", bottom: 0 }}>{this.props.nama}</span>
                        </Col>
                    </Row>
            </Container>
        );
    }
}

export default TestimoniCard;