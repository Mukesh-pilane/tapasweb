import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import {AiOutlineClose} from "react-icons/ai"

import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ArrowLeft,ArrowRight } from '../../assets/AllSvg';

import "./eventsmodal.css"


const EventsModal = ({ isOpen, onClose, images}) => {
    function SampleNextArrow(props) {
        const {onClick } = props;
        return (
          <button type="button" onClick={onClick} className="carousel-arrow arrow-next">
                              < ArrowRight />
                         </button>
        );
      }
      
        function SamplePrevArrow(props) {
          const { onClick } = props;
          return (
            <button type="button" onClick={onClick} className="carousel-arrow arrow-prev">
                  
                 <ArrowLeft/>
                             </button>
          );
        }
    

    const settings = {
        customPaging: function(i) {
            return (
              <a>
                <img height={30} width={30} src={`/src/assets/images/Relaxations${i}.jpeg`} />
              </a>
            );
          },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        fade:true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="modal-shadow slider-modal"
        >
         <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className='slide-modal'
            style={{
              
            }} 
            >
          <button onClick={onClose} className="modal-close-btn">
            <AiOutlineClose size={24} />
          </button>
          
              {/* <Slider
    {...settings}
    >
        {
            images?.map((image,i)=>{
                return (
                    <div key={i} className="EventSlider">
                       <img  src={image} alt=""  />
                    </div>
                )
            })
        }
    </Slider> */}
    
    <Carousel
            showStatus={false}
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
              {
            images?.map((image,i)=>{
                return (
                    <div key={i} className="slider-modal-container">
                       <img  src={image} alt=""  />
                    </div>
                )
            })
        }
            </Carousel>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
  )
}

export default EventsModal