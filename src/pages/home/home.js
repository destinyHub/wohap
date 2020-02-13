import React, { useState } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { Container, Row, Col, InputGroup } from 'reactstrap';
import Category from '../../components/category/kategori.js';


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import gambar1 from '../../Picture/tes.jpg';
import gambar2 from '../../Picture/tes2.jpg';
import gambar3 from '../../Picture/tes3.jpg';



const items = [
  {
    src: gambar1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: gambar2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: gambar3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;


function home(){
    return (
      <div>
        <Row>
          <Example />
          <Category />
        </Row>
      </div>
    );
}

export default home;