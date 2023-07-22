import React, { useState,useEffect } from 'react';
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
import slide4 from '../../assets/images/slide4.jpg';
import { ArrowLeft,ArrowRight } from '../../assets/AllSvg';
import  './Slider.css'
import { motion,AnimatePresence  } from 'framer-motion';
import {BsStars} from 'react-icons/bs'
import { FaQuoteLeft,FaQuoteRight } from 'react-icons/fa';
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
  const quotes = [
    "Meditation brings wisdom; lack of meditation leaves ignorance. Know well what leads you forward and what holds you back.",
    "When you find peace within yourself, you become the kind of person who can live at peace with others.",
    "Meditation is the ultimate mobile device; you can use it anywhere, anytime, unobtrusively.",
    "The mind is everything. What you think, you become.",
    "The goal of meditation is not to control your thoughts, but to stop letting them control you",
    "Meditation is the ultimate medicine for a troubled mind.",
    "You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level.",
    "Meditation is the art of doing nothing and letting everything be.",
    "Meditation is not a means to an end. It is both the means and the end.",


  ];
  const [randomQuote, setRandomQuote] = useState('');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      const quote = getRandomQuote();
      setRandomQuote(quote);
    }, 5000);
  
    // Run the quote update once on page load
    const quote = getRandomQuote();
    setRandomQuote(quote);
  
    return () => clearInterval(quoteInterval);
  }, []);

  
  return (
        <div className="hero-slider">
      <AnimatePresence  initial={false}>
        <motion.div
          className="quote-container"
          key={randomQuote}
          initial={{ opacity: 0, scale: 0.8 }} // Initial state
          animate={{ opacity: 1, scale: 1 }} // Animation when quote appears
          exit={{ opacity: 0, scale: 1  }} // Animation when quote disappears
          transition={{ duration: .5 , ease: 'easeOut'}} // Transition duration
          mode="out-in"
        >
          <h2 className="quote-text">
            <FaQuoteLeft className="quote-icon" /> {randomQuote} <FaQuoteRight className="quote-icon" />
          </h2>
          <div className="star-left">
            <BsStars fontSize={21} color="#7367f0" />
          </div>
          <div className="star-right">
            <BsStars fontSize={21} color="#7367f0" />
          </div>
        </motion.div>
      </AnimatePresence>
      
      
      <Carousel
         showThumbs={false}
         autoPlay={true}
         transitionTime={1000}
         infiniteLoop={true}
         interval={5000}
         showStatus={false}

         className="my-carousel"
         swipeable={ window.innerWidth <= 768 ? true : false}
         animationHandler={ window.innerWidth <= 768 ? null : "fade"}
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