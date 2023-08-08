
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
        `“Forming TAPAS was the best decision of my college days. Introducing a totally non-technical concept to a technical community was our biggest challenge. To add on to our challenges Principal Sir Dr. Sandeep Joshi Sir used to always present us with challenges. Living upto his expectations and proving that we are here to stay, we will leave behind a team which will sustain and carry forward our dream was our sheer pleasure. 
        Learning everything from scratch about committee formation, documentation, responsibilities, leadership qualities, etc etc.....we had a complete personality development by the end. 
        Winning the title "National Youth Ambassador" award by competing with 180+ colleges nationwide was a humbling experience. 
        
        Always grateful to pillars of TAPAS, Dr. Nivedita Shreyans ma'am and preceptor & mentor Prof. Madhura Vyavahare ma'am without whose guidance and encouragement we would have been lost. 
        
        Love to see TAPAS committee generations working hard bringing in peace to the campus. Their trips and other initiatives in colleges makes me immensely happy and proud. Proud of all the generations of TAPAS. Thank you for carrying forward our dream.”`,
      name: "Resmi Ramakrishnan",
      role: "Former TAPAS member",
      portrait: Tanya,
    },
    {
      id: 2,
      img: "../../assets/images/slide2.jpg",
      text:
        "“It's been a wonderful time with Tapas, even today after graduating from college 2 years back. The lively events and the peace of mind still reminds me back of the days when we had just started out Tapas with 3 day Dhyanotsav. Looking back in time, the growth of Tapas is unmatched and may it bring peace to all students of our college!”",
      name: "romax Rajeev",
      role: "Former TAPAS member",
      portrait: John,
    },
    {
      id: 3,
      img: "../../assets/images/slide3.jpg",
      text:
        `“TAPAS has been a transformative experience in my college life. It's a remarkable committee that brought adventure, connections, and personal growth. The unique freedom within TAPAS allows seamless interaction with peers, juniors, seniors, and faculty. Collaborating with faculty for event planning enhances responsibility and decision-making skills. The connections made with people from various backgrounds become lasting through Heartfulness. My advice to future members is to actively participate, create memories, and seek support. TAPAS isn't just a committee; it's a family where connections thrive. ❤️”`,
      name: "Vivek yadav",
      role: "",
      portrait: John,
    }
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

