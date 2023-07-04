import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import {HiLightBulb,HiEye} from 'react-icons/hi'
import './subhero.css';

const SubHero = () => {
  const [text, setText] = useState('Embrace wellness');
  const [showFullText, setShowFullText] = useState(false);
  const isMobileView = window.innerWidth <= 768;
  
  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => (prevText === 'Meditaion Club' ? 'Fitness Club' : 'Meditaion Club'));
    }, 3500); // Adjust the interval duration according to your preference

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="sub-hero">
        <div className="container">
          <h2 className="sub-hero-heading gradient-text">
            <span className="tapas-pce" id="scroll-down">Tapas Pce is </span>
            <Typewriter
              options={{
                strings: [text],
                autoStart: true,
                loop: false,
                cursor: '', // Set cursor to empty string to hide it
                delay: 50, // Delay between each character typewriting
                deleteSpeed: 50, // Speed of deleting characters (adjust this value)
              }}
            />
          </h2>
          <p className="sub-hero-description">
            {isMobileView ? (
              <>
                {showFullText ? (
                    <p className="sub-hero-description">
                    {isMobileView ? (
                      <>
                     {showFullText ? (
                  <>
                    Formed on 16 October 2019. TAPAS is a committee whose primary goal is to achieve good mental health and spirituality through heartfulness meditation. Heartfulness is a simple and subtle practice of meditation that connects each of us with the light and love in our hearts. It changes one's mind from stress to self-realization. TAPAS-PCE, in collaboration with Heartfulness, launched with the aim to spread the benefits of meditation to stressed-out students. It is a student club that emphasizes the well-being of students' mental health.{' '}
                    <button className="read-more-button" onClick={toggleTextVisibility}>
                      Show Less
                    </button>
                  </>
                ) : (
                  <>
                    Formed on 16 October 2019. TAPAS is a committee whose primary goal is to achieve good mental health and spirituality through heartfulness meditation.{' '}
                    <button className="read-more-button" onClick={toggleTextVisibility}>
                      Show More
                    </button>
                  </>
                )}
                      </>
                    ) : (
                      <>
                        Formed on 16 October 2019. TAPAS is a committee whose primary goal is to achieve good mental health and spirituality through heartfulness meditation. Heartfulness is a simple and subtle practice of meditation that connects each of us with the light and love in our hearts. It changes one's mind from stress to self-realization. TAPAS-PCE, in collaboration with Heartfulness, launched with the aim to spread the benefits of meditation to stressed-out students. It is a student club that emphasizes the well-being of students' mental health.
                      </>
                    )}
                  </p>
                ) : (
                  <>
                    Formed on 16 October 2019. TAPAS is a committee whose primary goal is to achieve good mental health and spirituality through heartfulness meditation.{' '}
                    <button className="read-more-button" onClick={toggleTextVisibility}>
                    Show More
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                Formed on 16 October 2019. TAPAS is a committee whose primary goal is to achieve good mental health and spirituality through heartfulness meditation. Heartfulness is a simple and subtle practice of meditation that connects each of us with the light and love in our hearts. It changes one's mind from stress to self-realization. TAPAS-PCE, in collaboration with Heartfulness, launched with the aim to spread the benefits of meditation to stressed-out students. It is a student club that emphasizes the well-being of students' mental health.
              </>
            )}
          </p>
   
        </div>
      </section >
      {/* <section className="sub-hero" >
        <div className="sub-section2">

          <div className="mission-section">
            <div className="icon">
              <HiLightBulb size={30}/>
            </div>
            <div className="mission-section-body">
              <h3 className="sub-mission-heading gradient-text">Our Mission</h3>
              <p>
              TAPAS-PCE is a wellness and meditation club that emphasizes the well-being of student’s mental health. Here we will organize various informative sessions on topics including meditation, mental health, inner peace,etc.
              </p>
            </div>
          </div>

          <div className="vision-section">

            <div className="icon">
            <HiEye size={30}/>
            </div>
            <div className="vision-section-body">
              <h3 className="sub-vision-heading gradient-text">Our Vision</h3>
              <p>
              TAPAS-PCE comes under the umbrella of heartfulness, in heartfulness there are some four simple steps: relax, meditate, rejuvenate and connect.
              </p>


            </div>
          </div>
        </div>
      </section> */}
      <article className="container-middle">
                <div className="articles">
                    <h2 className="sub-mission-heading gradient-text ">Our Mission</h2>
                    <p className="article-text">TAPAS-PCE is a wellness and meditation club that emphasizes the well-being of student’s mental health. Here we will organize various informative sessions on topics including meditation, mental health, inner peace,etc.
                    </p>
                </div>
                <div className="articles">
                    <h2 className="sub-vision-heading gradient-text ">Our Vision</h2>
                    <p className="article-text">TAPAS-PCE comes under the umbrella of heartfulness, in heartfulness there are some four simple steps: relax, meditate, rejuvenate and connect.</p>
                </div>
              
            </article>
    </>
  );
};

export default SubHero;
