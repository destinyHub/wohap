import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import "./register.css";

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <Row className="pt-5">
                    <Col></Col>
                    <Col className="card" style={{backgroundColor: '#d9d9d9'}}>
                        <h3 className="card-header text-center mt-3" style={{backgroundColor: '#ffcc00'}}>Register</h3>
                        <Form>
                            <FormGroup>
                                <Label>Nama depan</Label>
                                <Input type="text" className="form-control" placeholder="Nama depan" />
                            </FormGroup>

                            <FormGroup>
                                <Label>Nama belakang</Label>
                                <Input type="text" className="form-control" placeholder="Nama belakang" />
                            </FormGroup>

                            <FormGroup>
                                <Label>Alamat email</Label>
                                <Input type="email" className="form-control" placeholder="Masukkan email" />
                            </FormGroup>

                            <FormGroup>
                                <Label>Nomor HP</Label>
                                <Input type="text" className="form-control" placeholder="Masukkan nomor HP" />
                            </FormGroup>

                            <FormGroup>
                                <Label>Alamat rumah</Label>
                                <Input type="text" className="form-control" placeholder="Masukkan alamat rumah" />
                            </FormGroup>

                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" className="form-control" placeholder="Masukkan password" />
                            </FormGroup>

                            <Button type="submit" className="btn btn-primary btn-block">Register</Button>
                            <p className="forgot-password text-right">
                                Sudah daftar <a href="#">login?</a>
                            </p>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        );
    }
}