import React, {useState} from "react"
import AnimatedDialog from '../Modal/Modal';
import relaxation from '../../assets/images/relaxation.png'
import './Card.css'
function Card(){
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };
  
  return(
    <>
    <div className="card-item">
    <div className="card">
      <div className="imgBx">
      <img src={relaxation} />
      </div>
      <div className="content">
        <div className="details">

          <h2>Relaxation</h2>
          <div className="data">
            <h3><span>Learning to relax is vital for well-being. It reduces tension in all parts of your body and helps you to stay balanced even in stressful situations.</span></h3>
            <h5>steps</h5>
          </div>
          <div className="actionBtn">
            <button onClick={openDialog}>How to relax</button>
          </div>
        </div>
      </div>
    </div>
    {/**/}
          <AnimatedDialog isOpen={isOpen} onClose={closeDialog} />
    </div>
    </>
    )
}

export default Card