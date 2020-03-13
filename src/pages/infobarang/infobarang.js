import React from 'react';
import Test from '../../318x180.svg';
import Header from "../../Components/header/Header";
import Sofa from "../../Picture/Gambar_Kategori/sofa2.jpg";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row, Container
} from 'reactstrap';

const InfoBarang = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row xs="2">
                    <Col>
                        <Card style={{ width: '75%' }}>
                            <CardImg style={{ height: '300px' }} top src={Sofa} alt="Card image cap" />
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '75%' }}>
                            <CardBody>
                                <CardTitle><h3>Sofa</h3></CardTitle>
                                <CardSubtitle>Sofa paling nyaman untuk duduk, cocok untuk disimpan di ruang keluarga</CardSubtitle>
                                <br></br>
                                <br></br>
                                <br></br>
                                <CardText><h3>Rp 250.000</h3></CardText>
                                <Button>Beli</Button><span> </span>
                                <Button>Tambah ke keranjang</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default InfoBarang;