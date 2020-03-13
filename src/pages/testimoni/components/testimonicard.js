import React, { Component } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';

class TestimoniCard extends Component {
    render() {
        return (
            <Card>
                <CardBody>
                    <Row>
                        <Col xs="3">
                            <img src={this.props.src} style={{ width: "100%" }} />
                        </Col>
                        <Col xs="9">
                            <h4>{this.props.pernyataan}
                            </h4>
                            <span style={{ position: "absolute", bottom: 0 }}>{this.props.nama}</span>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        );
    }
}

export default TestimoniCard;