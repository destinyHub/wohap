import React, { Component } from 'react';
import Header from "../Components/header/Header";
import toko from "../Picture/toko.jpg";
import Test from '../318x180.svg';
import Footer from "../Components/Footer/ContactUs";
import {
    Col, Row, Container
} from 'reactstrap';
class About extends Component {
    render() {
        return (
            <>
                <div>
                    <Header />
                    <img style={{ width: '100%', height: '800px' }} src={toko} alt="Smiley face" />
                    <br></br>
                    <br></br>
                    <Container style={{ border: '2px solid black' }}>
                        <h2 style={{ textAlign: 'center' }}>Company Profile ( Wohap Furniture )</h2>
                        <Row xs="2">
                            <Col>
                                <p>Wohap Furniture sebagai pusat Furniture dan Ritel TERBESAR, TERLENGKAP, TERMURAH, dan TERPERCAYA di Kota Garut
                                telah melayani pelanggan selama lebih dari 60 tahun. Bermula dari toko furniture sederhana, sekarang telah mendirikan showroom terbaik dan terbesar di Kota Garut.
                                Berlandaskan tujuan untuk memungkinkan konsumen berbelanja furniture serta springbed terbaik dengan mudah, kini Wohap Furniture mengembangkan layanan belanja online
                        melalui www.wohapmeubel.com yang memudahkan Anda dalam memenuhi segala kebutuhan berbagai jenis furniture dan spring bed, terbaru, terpercaya dan terjamin kualitasnya.</p>

                                <p>Wohap Furniture menawarkan konsep berbelanja dengan harga murah, lengkap, dan kualitas terbaik. Terbukti konsep ini berjalan baik dengan kami terus melakukan perubahan
                                lebih baik untuk memenuhi kebutuhan pelanggan dengan menyediakan produk-produk berkualitas terbaik dengan harga yang kompetitif dan layanan yang memuaskan. Seluruh produk
                        furniture menawarkan produk baru dan garansi pabrik asli. Jangan lewatkan kesempatan untuk berbelanja furniture berkualitas di Wohap Furniture.</p>

                                <p>Kami yakin Anda akan menemukan penawaran terbaik di sini!</p>
                                <p>Hormat kami,</p>
                                <p>Wohap Furniture</p>
                            </Col>
                            <Col>
                                <img src={Test} alt="Card image cap" style={{ width: '100%', height: '500px' }}></img>
                            </Col>
                        </Row>
                    </Container>
                    <br></br>
                    <Container style={{ border: '2px solid black' }}>
                        <h2 style={{ textAlign: 'center' }}>VISI</h2>
                        <p>Wohap Furniture sebagai surga bagi produk furniture terlengkap terpercaya untuk menciptakan kehidupan sehari-hari yang lebih baik bagi banyak orang. Mendedikasikan diri
                        untuk menawarkan berbagai rancangan dengan desain terbaik, produk furniture yang fungsional dengan harga bervariasi dan terjangkau. Perusahaan yang memegang teguh tujuannya
                dan mewariskan pengalaman berbelanja terbaik untuk setiap konsumen setia kami.</p></Container>
                    <br></br>
                    <Container style={{ border: '2px solid black' }}>
                        <h2 style={{ textAlign: 'center' }}>MISI</h2>
                        <p>Wohap Furniture memprioritaskan banyak hal penting dalam mendapatkan dan mempertahankan kepercayaan konsumen untuk memenuhi kebutuhan desain interior dan menjadikan rumah
                        yang dilengkapi furniture terbaik sampai ke detail terakhir. Wohap Furniture berusaha untuk mencocokkan konsep desain, gaya hidup, kepribadian dan selera konsumennya. Menawarkan saran,
                        ide dan solusi terbaik untuk menciptakan suasana keanggunan dan kenyamanan. Wohap Furniture berusaha keras untuk menjadi merek yang secara eksklusif dikaitkan dan dipilih oleh mereka yang
                menghargai hal-hal terbaik dalam hidup.</p></Container>
                </div >
                <Footer></Footer>
            </>
        );
    }
}

export default About;