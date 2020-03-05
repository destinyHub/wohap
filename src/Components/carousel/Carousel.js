import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container
} from 'reactstrap';
import Gambar1 from '../../Picture/Carousel/mebel3Resize.jpg';
import Gambar2 from '../../Picture/Carousel/mebel2Resize.jpeg';
import Gambar3 from '../../Picture/Carousel/mebel1Resize.jpg';

const items = [
  {
    src: Gambar1,
    // altText: 'Meja',
    caption: 'Set Tamu'
  },
  {
    src: Gambar2,
    caption: 'Set Meja'
  },
  {
    src: Gambar3,
    caption: 'Meja'
  }
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%"/>
        
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Container>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <br/>
    </Container>
  );
}

export default Slider;