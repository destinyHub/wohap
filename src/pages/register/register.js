import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import PhoneNumber from './components/phonenumber';

import "./register.css";

export default class SignUp extends Component {
    handleOnChange(value) {
        this.setState({
            phone: value
        });
    }

    render() {
        return (
            <div>
                <Row className="pt-5">
                    <Col xs="2" sm="2" md="3"
                                    lg="3" xl="4"></Col>
                    <Col xs="8" sm="8" md="6"
                                    lg="6" xl="4" className="card" style={{ backgroundColor: '#d9d9d9' }}>
                        <h3 className={"text-center pt-3"}>Register</h3>
                        <Form>
                            <Row>
                                <Col xs="6" sm="6" md="6"
                                    lg="6" xl="6">
                                    <FormGroup>
                                        <Label>Nama depan</Label>
                                        <Input type="text" className="form-control" placeholder="Nama depan" />
                                    </FormGroup>
                                </Col>
                                <Col xs="6" sm="6" md="6"
                                    lg="6" xl="6">
                                    <FormGroup>
                                        <Label>Nama belakang</Label>
                                        <Input type="text" className="form-control" placeholder="Nama belakang" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label>Alamat email</Label>
                                <Input type="email" className="form-control" placeholder="Masukkan email" />
                            </FormGroup>

                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" className="form-control" placeholder="Masukkan password" />
                            </FormGroup>

                            <FormGroup>
                                <Label>Nomor HP</Label>
                                <PhoneNumber />
                            </FormGroup>

                            <FormGroup>
                                <Label>Alamat rumah</Label>
                                <Input type="text" className="form-control" placeholder="Masukkan alamat rumah" />
                            </FormGroup>

                            <Button type="submit" className="btn btn-block" style={{color: "black", backgroundColor: '#ffcc00', border: "none"}}>Register</Button>
                            <p className="forgot-password text-right">
                                Sudah daftar <a href="#">login?</a>
                            </p>
                        </Form>
                    </Col>
                    <Col xs="2" sm="2" md="3"
                                    lg="3" xl="4"></Col>
                </Row>
            </div>
        );
    }
}