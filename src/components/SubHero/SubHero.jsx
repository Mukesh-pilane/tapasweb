import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

import './subhero.css';

const SubHero = () => {
  const [text, setText] = useState('Embrace wellness');

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => (prevText === 'Meditaion Club' ? 'Fitness Club' : 'Meditaion Club'));
    }, 5000); // Adjust the interval duration according to your preference

    return () => clearInterval(interval);
  }, []);

  return (
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
        Dedicated initiative aimed at promoting the mental health and well-being of students. We firmly believe in the transformative power of meditation and mindfulness practices, which can significantly contribute to combating stress and cultivating inner peace. Our mission is to empower students with the tools and knowledge needed to prioritize their well-being and lead balanced lives. By incorporating meditation into their daily routines, students can experience improved focus, enhanced emotional resilience, and a greater sense of overall well-being. Join us on this journey of self-discovery and self-care, and let's together create a positive and thriving community that prioritizes mental health and holistic wellness.
        </p>
      </div>
    </section >
  );
};

export default SubHero;
