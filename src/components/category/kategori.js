import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './kategori.css';
import Image from 'react-bootstrap/Image';
import Img1 from '../../Picture/Gambar_Kategori/sofa.png';
import Img2 from '../../Picture/Gambar_Kategori/kursidanmeja.png';
let arrCategory = ["jojo" , "mike" , "alvin " , "irwan"];


function category(){
    return (<Container>
        <Row>
          <Col xs={6} md={4}>
            <Image className="gambarkategori" src = {Img1} roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image className="gambarkategori" src={Img2} roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="" thumbnail />
          </Col>
        </Row>
      </Container>);
}

export default category;