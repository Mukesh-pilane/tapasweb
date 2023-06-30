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
        <span className="tapas-pce">Tapas Pce is </span>
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
      </div>
    </section>
  );
};

export default SubHero;
