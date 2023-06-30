import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

import './subhero.css';

const SubHero = () => {
  const [text, setText] = useState('Embrace wellness');

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => (prevText === 'Embrace wellness' ? 'Embrace Meditation' : 'Embrace wellness'));
    }, 6000); // Adjust the interval duration according to your preference

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="sub-hero">
      <div className="container">
        <h2 className="sub-hero-heading gradient-text">Tapas Pce-
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
          Tapas PCE, in collaboration with Heartfulness, is a wellness and meditation club dedicated to promoting the
          mental health and well-being of students. We believe in spreading the benefits of meditation to help students
          combat stress and cultivate inner peace.
        </p>
      </div>
    </section>
  );
};

export default SubHero;
