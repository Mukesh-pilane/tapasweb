import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../../assets/images/s1.jpg";
import s2 from "../../assets/images/s2.jpg";
import s3 from "../../assets/images/s3.jpg";
import './TeamSlider.css'
import { ArrowLeft,ArrowRight } from '../../assets/AllSvg';

const TeamSlider = () => {

      
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
        dots: false,
        infinite: true,
        fade:true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    
  return (
    <>
    <div className="Team__slider">
      <div className="Team__slider-container"> 
    <Slider
    {...settings}
    >
        <div className="Team__slider-imgContainer">
        <img src={s1} alt="" />
        </div>
        <div className="Team__slider-imgContainer">
        <img src={s2} alt="" />
        </div>
        <div className="Team__slider-imgContainer">
        <img src={s3} alt="" />
        </div>
    </Slider>
    </div>
    </div>
    </>
  )
}

export default TeamSlider