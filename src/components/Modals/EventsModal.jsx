import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import {AiOutlineClose} from "react-icons/ai"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft,ArrowRight } from '../../assets/AllSvg';

import "./eventsmodal.css"


const EventsModal = ({ isOpen, onClose, images}) => {
    function SampleNextArrow(props) {
        const {onClick } = props;
        return (
          <button type="button" onClick={onClick} className="Team__slider-carousel-arrow Team__slider-arrow-next">
                              < ArrowRight />
                         </button>
        );
      }
      
        function SamplePrevArrow(props) {
          const { onClick } = props;
          return (
            <button type="button" onClick={onClick} className="Team__slider-carousel-arrow Team__slider-arrow-prev">
                  
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
        className='modal-shadow'
      >
        <button
            onClick={onClose}
            className='modal-close-btn'
          >
            <AiOutlineClose size={24}/>
          </button>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className='modal'
          style={{
            
          }} 
        >
              <Slider
    {...settings}
    >
        {
            images.map((image,i)=>{
                console.log(image)
                return (
                    <div key={i}>
                       <img height={250} width={400} src={image} alt=""  />
                    </div>
                )
            })
        }
    </Slider>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
  )
}

export default EventsModal