import React, { Component } from "react";
import { Container, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import "./login.css";

export default class Login extends Component {
    render() {
        return (
            <div>
                <Row className="pt-5">
                    <Col></Col>
                    <Col style={{backgroundColor: '#d9d9d9'}}>
                    <h3 className="card-header text-center mt-3" style={{backgroundColor: '#ffcc00'}}>Login</h3>
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

                            <Button type="submit" className="btn btn-primary btn-block">Login</Button>
                            <p className="forgot-password text-right">
                                Lupa <a href="#">password?</a>
                            </p>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        );
    }
}