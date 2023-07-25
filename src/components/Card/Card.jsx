import React, {useState} from "react"
import AnimatedDialog from '../Modals/Modal';
import SliderModal from "../Modals/SliderModal";
import './Card.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function Card({img, heading, description, slides, link}){
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSlider, setIsCloseSlider] = useState(false)

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const openSliderModal = () => {
    setIsCloseSlider(true);
  }
  
    const closeSliderModal = () => {
    setIsCloseSlider(false);
  }
  
  return(
    <>
    <div className="card-item"  >
    <div className="card">
      <div className="imgBx">
      <img src={img} />
      </div>
      <div className="content">
        <div className="details">
        
          <h2>{heading}</h2>
          <div className="data">
            <h3>{description}</h3>
            
            <div className="steps-container" onClick={openSliderModal}>
              <div className="steps-btn">
            <a >steps</a>
              </div>
            </div>
          </div>
          <div className="actionBtn">
            <button onClick={openDialog}>How to relax</button>
            </div>
          </div>
        </div> 
    </div>
    {/**/}
          <AnimatedDialog isOpen={isOpen} onClose={closeDialog} link={link} />
          <SliderModal isOpen={isOpenSlider} onClose={closeSliderModal} slides={slides}/>
    </div>
    
    </>
    )
}

export default Card