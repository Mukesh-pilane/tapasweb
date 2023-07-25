import "./slidermodal.css";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

import { ArrowLeft,ArrowRight } from '../../assets/AllSvg';
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SliderModal = ({ isOpen, onClose, slides }) => {
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
            {slides.map((slide, index)  => (
                <div className="slider-modal-container" key={index}>
                    <img key={index} src={slide} alt={`Slide ${index}`} />
                </div>
              ))}
            </Carousel> 
          </motion.div>
          </motion.div>

      )}
    </AnimatePresence>    
  );
};

export default SliderModal;
