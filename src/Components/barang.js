import React from 'react';
import Test from '../318x180.svg';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row, Container
} from 'reactstrap';

const Example = () => {
    return (
            <Container>
            <Row xs="4">
                <Col>
                <Card style={{width: '100%'}}>
                    <CardImg top src={Test} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Sofa</CardTitle>
                        <CardSubtitle>Rp 250.000</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                <Card style={{width: '100%'}}>
                    <CardImg top src={Test} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Sofa</CardTitle>
                        <CardSubtitle>Rp 250.000</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                <Card style={{width: '100%'}}>
                    <CardImg top src={Test} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Sofa</CardTitle>
                        <CardSubtitle>Rp 250.000</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                <Card style={{width: '100%'}}>
                    <CardImg top src={Test} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Sofa</CardTitle>
                        <CardSubtitle>Rp 250.000</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
            <Row xs="4" className={'mt-5'}>
                <Col>
                <Card style={{width: '100%'}}>
                    <CardImg top src={Test} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Sofa</CardTitle>
                        <CardSubtitle>Rp 250.000</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                <Card style={{width: '100%'}}>
                    <CardImg top src={Test} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Sofa</CardTitle>
                        <CardSubtitle>Rp 250.000</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                <Card style={{width: '100%'}}>
                    <CardImg top src={Test} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Sofa</CardTitle>
                        <CardSubtitle>Rp 250.000</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                <Card style={{width: '100%'}}>
                    <CardImg top src={Test} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Sofa</CardTitle>
                        <CardSubtitle>Rp 250.000</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
            </Container>
    );
};

export default Example;
