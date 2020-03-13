import React, {Component} from 'react';
import KumpulanBarang from "../Components/kontenbarang/barang";
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

                <KumpulanBarang/>
                <ContactUs/>
            </div>
        );
    }
}

export default Home;