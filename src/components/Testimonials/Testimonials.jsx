
import React, { useState } from "react";
import Vivek from '../../assets/images/Tesminonial-images/Vivek.jpg'
import Romax from '../../assets/images/Tesminonial-images/RomaxEnh.jpg'
import Reshmi from '../../assets/images/Tesminonial-images/reshmiEnhance.jpg'
import Next from "../../assets/images/icon-next.svg";
import Prev from "../../assets/images/icon-prev.svg";
import "./Testimonials.css";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 3,
      text:
        `“TAPAS has profoundly shaped my college life, offering adventure, connections, and personal growth. Its exceptional freedom enables seamless peer and faculty interaction, while collaborative event planning hones decision-making skills. Heartfulness fosters lasting connections, transforming TAPAS into an enduring, supportive family rather than a mere committee. ❤️”`,
      name: "Vivek Yadav",
      role: "Former TAPAS president",
      portrait: Vivek,
    },
    {
      id: 1,
      text:
        `“Establishing TAPAS in a technical community reshaped my college journey. Overcoming challenges, we formed a dedicated team, achieving the "National Youth Ambassador" award. Guided by Dr. Nivedita Shreyans and Prof. Madhura Vyavahare, I'm proud to witness successive TAPAS generations thriving and continuing our dream through impactful campus initiatives”`,
      name: "Resmi Ramakrishnan",
      role: "Former TAPAS member",
      portrait: Reshmi,
    },
    {
      id: 2,
      text:
        "“It's been a wonderful time with Tapas, even today after graduating from college 2 years back. The lively events and the peace of mind still reminds me back of the days when we had just started out Tapas with 3 day Dhyanotsav. Looking back in time, the growth of Tapas is unmatched and may it bring peace to all students of our college!”",
      name: "Romax Rajeev",
      role: "Former TAPAS member",
      portrait: Romax,
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
    <section className="Testimonial">
    <div className="Testimonials">
    <h2 className="gradient-text">Testimonials</h2>
      <div className="container">
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
      </div>
    </div>
    </section>
  );
}

