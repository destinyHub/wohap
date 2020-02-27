import React, {Component} from 'react';
import Barang from "../Components/barang";
import Header from "../Components/header/Header";
import { Row, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Barang/>
            </div>
        );
    }
}

export default Home;