import React, {Component} from 'react';
import Barang from "../Components/barang";
import Header from "../Components/header/Header";
import Slider from "../Components/carousel/Carousel";
import ContactUs from '../Components/Footer/ContactUs';

class Home extends Component {
    render() {
        const foot = React.createRef();
        return (
            <div>
                <Header page="home" footer={foot}/>
                <Slider/>
                <Barang/>
                <ContactUs footer={foot}/>
            </div>
        );
    }
}

export default Home;