import React, {Component} from 'react';
import Barang from "../Components/barang";
import Header from "../Components/header/Header";
import { Row, Container } from 'reactstrap';
import Slider from "../Components/carousel/Carousel";
import ContactUs from '../Components/Footer/ContactUs';

class Home extends Component {
    render() {
        return (
            <div>
                <Header page="home"/>
                <Slider/>
                <Barang/>
                <ContactUs/>
            </div>
        );
    }
}

export default Home;