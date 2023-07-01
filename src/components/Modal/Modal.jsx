import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import {AiOutlineClose} from "react-icons/Ai"
import './modal.css'
const AnimatedDialog = ({ isOpen, onClose }) => {
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
            
            <ReactPlayer
              url="https://www.youtube.com/watch?v=gDClb-yjNdQ"
              width="100%"
              height="100%"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedDialog;
