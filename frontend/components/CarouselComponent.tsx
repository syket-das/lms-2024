import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const CarouselComponent = () => {
  return (
    <Carousel
      className="h-[40vh]"
      plugins={[
        Autoplay({
          delay: 5000,
          waitForTransition: true,
          speed: 500,
          autoplay: true,
          loop: true,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <img
            className="h-[50vh] w-full object-cover"
            src="https://source.unsplash.com/1600x900/?book"
            alt="First slide"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="h-[50vh] w-full object-cover"
            src="https://source.unsplash.com/1600x900/?library"
            alt="First slide"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="h-[50vh] w-full object-cover"
            src="https://source.unsplash.com/1600x900/?study"
            alt="First slide"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselComponent;

// unsplash random image api: https://source.unsplash.com/random/1920x1080

// book images unsplash api: https://source.unsplash.com/1600x900/?book
