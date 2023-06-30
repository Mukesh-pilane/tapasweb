import React from 'react';
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
import slide4 from '../../assets/images/slide4.jpg';
import  './Slider.css'
const Slider = () => {
  const slides = [
    {
      id: 1,
      img: slide1,
    },
    {
      id: 2,
      img: slide2,
    },
    {
      id: 3,
      img: slide3,
    },
    {
      id: 4,
      img: slide4,
    },
  ];

  return (
    <div className="hero-slider">
      <Carousel
        showThumbs={false}
                    autoPlay={true}
                    transitionTime={1000}
                    infiniteLoop={true}
                    showStatus={false}
                    className="my-carousel"
                    swipeable={false}
                    animationHandler="fade"
      >
        {slides.map((slide) => (
        <>
          <div className="slider-Image" key={slide.id}>
            <img src={slide.img} alt={`Slide ${slide.id}`} />
          </div>
          <div className="img-info">
          <h2>
          Text related to the image
          </h2>
          </div>
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
