import React, { Component } from 'react';
import Header from '../../Components/header/Header';
import { Card, CardBody, Row, Col } from 'reactstrap';
import TestimoniCard from './components/testimonicard';
import FotoMike from '../../Picture/mike.jpg';
import FotoIrwan from '../../Picture/foto_pas_rpl_crop.jpg';
import FotoAlvin from '../../Picture/alvin.jpg';

class Testimoni extends Component {
    render() {
        return (
            <div>
                <Header page="testimoni" />
                <Row>
                    <Col xs="2"></Col>
                    <Col xs="8">
                        <TestimoniCard src={FotoMike} pernyataan="Menurut saya Wohap merupakan toko furnitur yang paling lengkap di Garut,
                                barang-barang yang dijual berkualitas dan harga cukup terjangkau." nama="Michael Stevin Cahyadi"/><br></br>
                        <TestimoniCard src={FotoIrwan} pernyataan="Menurut saya, kita tidak perlu takut terhadap Corona karena kita dilahirkan
                        sudah pasti akan menemui ajal. Jadi kita perlu mendalami iman dan menyiapkan mental untuk terkena Corona. 
                        Daripada mencemaskan lebih baik menyiapkan diri untuk terpapar Corona dan tetap hidup." nama="Johanes Irwan"/><br></br>
                        <TestimoniCard src={FotoAlvin} pernyataan="Menurut saya, kita tidak perlu takut terhadap Corona karena kita dilahirkan
                        sudah pasti akan menemui ajal. Jadi kita perlu mendalami iman dan menyiapkan mental untuk terkena Corona. 
                        Daripada mencemaskan lebih baik menyiapkan diri untuk terpapar Corona dan tetap hidup." nama="Alvinus Sutendy"/><br></br>
                    </Col>
                    <Col xs="2"></Col>
                </Row>
            </div>
        );
    }
}

export default Testimoni;