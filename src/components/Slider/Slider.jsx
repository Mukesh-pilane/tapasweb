import React from 'react';
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
import slide4 from '../../assets/images/slide4.jpg';
import { ArrowLeft,ArrowRight } from '../../assets/AllSvg';
import  './Slider.css'

import { Link } from 'react-scroll';
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
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                      hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow arrow-prev">
            
            <ArrowLeft/>
                        </button>
                      )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                      hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow arrow-next">
                          < ArrowRight />
                        </button>
                      )
                    }
                    showStatus={false}
                    className="my-carousel"

                    swipeable={false}
                    animationHandler="fade"
      >

       {slides.map((slide) => (
        <div key={slide.id}>
          <div className="slider-Image">
            <img src={slide.img} alt={`Slide ${slide.id}`} />
          </div>
          <div className="img-info">
            <h2>
              Text related to the image
            </h2>
          </div>

        </div>
      ))}
      </Carousel>
      <div className="scroll-section">
      <Link
          to="scroll-down" 
          smooth={true}
          duration={500}
        >
          <div className="scroll-mouse"></div>
        </Link>
      </div>

    </div>
  );
};

export default Slider;