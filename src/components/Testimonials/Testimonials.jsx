
import React, { useState } from "react";
import Tanya from "../../assets/images/image-tanya.jpg";
import John from "../../assets/images/image-john.jpg";
import Next from "../../assets/images/icon-next.svg";
import Prev from "../../assets/images/icon-prev.svg";
import "./Testimonials.css";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      img: "../../assets/images/slide1.jpg",
      text:
        "“If you want to lay the best foundation possible, I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”",
      name: "John Tarkpor",
      role: "Junior Front-end Developer",
      portrait: John,
    },
    {
      id: 2,
      img: "../../assets/images/slide2.jpg",
      text:
        "“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”",
      name: "Tanya Sinclair",
      role: "UX Engineer",
      portrait: Tanya,
    },
    {
      id: 3,
      img: "../../assets/images/slide3.jpg",
      text:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu lectus eu lectus luctus tempus vitae ac tortor. Fusce ac orci quis risus vulputate condimentum. Sed in nunc non ex auctor tincidunt. In faucibus tellus auctor tincidunt. Nulla facilisi.”",
      name: "Lorem Ipsum",
      role: "Developer",
      portrait: "",
    },
    {
      id: 4,
      img: "../../assets/images/slide4.jpg",
      text:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu lectus eu lectus luctus tempus vitae ac tortor. Fusce ac orci quis risus vulputate condimentum. Sed in nunc non ex auctor tincidunt. In faucibus tellus auctor tincidunt. Nulla facilisi.”",
      name: "Lorem Ipsum",
      role: "Designer",
      portrait: "",
    },
    {
      id: 5,
      img: "../../assets/images/slide2.jpg",
      text:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu lectus eu lectus luctus tempus vitae ac tortor. Fusce ac orci quis risus vulputate condimentum. Sed in nunc non ex auctor tincidunt. In faucibus tellus auctor tincidunt. Nulla facilisi.”",
      name: "Lorem Ipsum",
      role: "Tester",
      portrait: "",
    },
  ];

  const totalSlides = slides.length;

  

  function goToPrevSlide() {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  }

  function goToNextSlide() {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  }

  const currentSlideData = slides[currentSlide];

  return (
    <div className="Testimonials">
       <h2 className="gradient-text"> Students Testimonials</h2>
      <section className="container">
        <div className="slider">
        <div className="slide">
          <div className="testimonial">
            <p className="text">{currentSlideData.text}</p>
            <p className="name">
              {currentSlideData.name} <span>{currentSlideData.role}</span>
            </p>
          </div>
          <div className="photo">
            {currentSlideData.portrait && (
              <img
                src={currentSlideData.portrait}
                alt={`Portrait of ${currentSlideData.name}`}
                className="portrait"
              />
            )}
          </div>
  
            <button className="button prev" onClick={goToPrevSlide}>
              <img src={Prev} alt="Previous Button" className="prevImg" />
            </button>
            <button className="button next" onClick={goToNextSlide}>
              <img src={Next} alt="Next Button" className="nextImg" />
            </button>
        </div>

        </div>
      </section>
    </div>
  );
}

