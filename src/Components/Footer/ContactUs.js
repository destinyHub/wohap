import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {
    Container, Row, Col
} from 'reactstrap';

import{
    Link
} from 'react-router-dom'

// const footer = React.createRef();

const ContactUs = (props) => {
    return (
        <div style={{backgroundColor:'#d9d9d9'}} ref={props.footer}>
            <hr style={{ border: '2px solid', color: '#ffcc00' }}></hr>
            <Container>
                <Row xs="4">
                    <Col>
                        <Container>
                            <h5>Lokasi Toko:</h5>
                            <div>
                                <FaMapMarkerAlt></FaMapMarkerAlt><h7> JL. Jend. A. Yani 193 - Garut</h7><br></br>
                                <FaMapMarkerAlt></FaMapMarkerAlt><h7> JL. Jend. A. Yani 172 - Garut</h7>
                            </div>
                            <br></br>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <h5>Hubungi Kami: </h5>
                            <div>
                                <FaPhoneSquare></FaPhoneSquare><h7> (0262)-233875 </h7><br></br>
                                <FaPhoneSquare></FaPhoneSquare><h7> (0262)-231946 </h7><br></br>
                                <FaWhatsappSquare></FaWhatsappSquare><h7> (+62) 813 9440 2900</h7>
                            </div>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <h5>Email: </h5>
                            <div>
                                <FaEnvelope></FaEnvelope><h7> wohapmeubel@yahoo.com </h7><br></br>
                            </div>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <h5>Sosial Media: </h5>
                            <div>
                                <FaInstagram></FaInstagram><h7> @wohap_meubel </h7><br></br>
                                <FaTwitter></FaTwitter><h7> @wohapmeubeul </h7><br></br>
                                <FaFacebook></FaFacebook><h7> Wohap Meubel </h7><br></br>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>

    );

};

export default ContactUs;