import React, { Component } from 'react';
import Header from '../../Components/header/Header';
import { Card, CardBody, Row, Col } from 'reactstrap';
import TestimoniCard from './components/testimonicard';
import FotoMike from '../../Picture/mike.jpg';
import FotoIrwan from '../../Picture/foto_pas_rpl_crop.jpg';
import FotoAlvin from '../../Picture/alvin.jpg';
import Footer from '../../Components/Footer/ContactUs';
class Testimoni extends Component {
    render() {
        return (
            <>
                <div>
                    <Header page="home" />
                    <Row>
                        <Col xs="2"></Col>
                        <Col xs="8">
                            <TestimoniCard src={FotoMike} pernyataan="Menurut saya Corona cukup berbahaya bagi orang. Jika kita ingin tenang dari
                        ancaman Corona lebih baik kita menerima virusnya dan memunculkan antibodi." nama="Michael Stevin" /><br></br>
                            <TestimoniCard src={FotoIrwan} pernyataan="Menurut saya, kita tidak perlu takut terhadap Corona karena kita dilahirkan
                        sudah pasti akan menemui ajal. Jadi kita perlu mendalami iman dan menyiapkan mental untuk terkena Corona. 
                        Daripada mencemaskan lebih baik menyiapkan diri untuk terpapar Corona dan tetap hidup." nama="Johanes Irwan" /><br></br>
                            <TestimoniCard src={FotoAlvin} pernyataan="Menurut saya Corona dapat dihambat oleh suhu panas. Oleh karena itu
                        saya sarankan teman-teman berada di lingkungan beradiasi tinggi.
                        Semakin tinggi radiasi maka akan semakin panas badan anda. Walaupun umur menjadi pendek tapi aman dari Corona." nama="Alvinus Sutendy" /><br></br>
                        </Col>
                        <Col xs="2"></Col>
                    </Row>
                </div>
                <Footer></Footer>
            </>
        );
    }
}

export default Testimoni;