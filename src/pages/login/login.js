import React, { Component } from "react";
import { Container, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import "./login.css";

export default class Login extends Component {
    render() {
        return (
            <div>
                <Row className="pt-5">
                    <Col xs="2" sm="2" md="3"
                                    lg="4" xl="4"></Col>
                    <Col xs="8" sm="8" md="6"
                                    lg="4" xl="4" style={{ backgroundColor: '#d9d9d9' }}>
                        <h3 className="text-center pt-3">Login</h3>
                        <Form className="">
                            <FormGroup>
                                <Label>Alamat email</Label>
                                <Input type="email" className="form-control" placeholder="Masukkan email" />
                            </FormGroup>

                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" className="form-control" placeholder="Masukkan password" />
                            </FormGroup>

                            <FormGroup>
                                <div className="custom-control custom-checkbox">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <Label className="custom-control-label" htmlFor="customCheck1">Simpan sandi</Label>
                                </div>
                            </FormGroup>

                            <Button type="submit" className="btn btn-block" style={{color: "black", backgroundColor: '#ffcc00', border: "none"}}>Login</Button>
                            <p className="forgot-password text-right">
                                Lupa <a href="#">password?</a>
                            </p>
                        </Form>
                    </Col>
                    <Col xs="2" sm="2" md="3"
                                    lg="4" xl="4"></Col>
                </Row>
            </div>
        );
    }
}