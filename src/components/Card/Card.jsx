import React, {useState} from "react"
import AnimatedDialog from '../Modal/Modal';
import relaxation from '../../assets/images/relaxation.png'
import './Card.css'
import ReactPlayer from 'react-player';
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function Card({img, slides, link}){
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const Slider = ()=>{

  }
  
  return(
    <>
    <div className="card-item"  >
    <div className="card">
      <div className="imgBx">
      <img src={relaxation} />
      </div>
      <div className="content">
        <div className="details">

          <h2>Relaxation</h2>
          <div className="data">
            <h3><span>Learning to relax is vital for well-being. It reduces tension in all parts of your body and helps you to stay balanced even in stressful situations.</span></h3>
            
            <div className="steps-btn" onClick={openDialog}>
            <h5 >steps</h5>
            </div>
          </div>
          <div className="actionBtn">
            <button onClick={openDialog}>How to relax</button>
            </div>
          </div>
        </div>
    </div>
    {/**/}
          <AnimatedDialog isOpen={isOpen} onClose={closeDialog} playerComponent={<ReactPlayer
              url="https://www.youtube.com/watch?v=gDClb-yjNdQ"
              width="100%"
              height="100%"
            />} />
    </div>
    
    </>
    )
}

export default Card