import React, { useState } from 'react';
import car1 from "../../..//assets/car1.png"
import car2  from "../../../assets/car2.png"
import car3 from "../../../assets/tuningback.jpg"
import car4 from "../../../assets/usedBack.jpg"

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,

} from 'reactstrap';
import { CarouselWapper } from './carouselStyle';

const items = [
  {
    src: `${car1}`,
    altText: 'CAR1',
    caption: 'CAR1',
    key: 1,
  },
  {
    src: `${car2}`,
    altText: 'CAR2',
    caption: 'CAR2',
    key: 2,
  },
];

function Carusel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
                <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{width:"100%", height:"100wh"}} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>

    );
  });

  return (
    <CarouselWapper>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    </CarouselWapper>

  );
}

export default Carusel;