import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeEvent.css";
import event1 from '../../assets/images/slide1.jpg';
import event2 from '../../assets/images/slide2.jpg';
import event3 from '../../assets/images/slide3.jpg';
import event4 from '../../assets/images/slide4.jpg';

const HomeEvent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const EventsData = [
    {
      title: 'Kanha',
      description: 'It is a 3-day International Youth Conference on “Rising with Kindness” at Kanha Shanti Vanam in Hyderabad, in collaboration with HEARTFULNESS. Throughout the 3 days, different meditation sessions and events are organized.',
      img: event1
    },
    {
      title: 'Dhyanotsav',
      description: 'Dhyanotsav is generally organized for the second and first-year students of the college in offline mode. Here the students get acquainted with the committee and also with the heartfulness meditation.',
      img: event2
    },
    {
      title: '21 days meditation challenge',
      description: 'It is a 21 days meditation challenge organized in online mode which is open for all. The event has a specific focus on helping individuals build a habit of meditation by following a structured routine over 21 days.',
      img: event3
    },
    {
      title: 'Dhyanratri',
      description: 'Dhyanratri is a 9-day meditation drive that is organized online mode with a motive for each day to make an effort to establish peace of mind and a habit of meditation during the holy days of Navratri. Heartfulness meditation is practiced during the event.',
      img: event4
    }
  ];



  const EventCard = ({ Data, index }) => {
    return (
      <div className={`homeEventCard ${index === activeIndex ? 'active' : ''}`}>
        <div className="homeEventCard__imgContainer">
          <img src={Data.img} alt={Data.title} />
        </div>
        <div className="homeEventCard__infoContainer">
          <h2 className="homeEventCard__infoContainer-title">{Data.title}</h2>
          <p className="homeEventCard__infoContainer-discription">{Data.description}</p>
          
        </div>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    fade:true,
    speed: 500,
    arrows: false,
    cssEase: "linear",
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
    ref: sliderRef
  };

  return (
    <section className='homeEvent'>
    <div className="homeEventContainer">
      <h1 className="gradient-text">Our Events</h1>
      <Slider {...settings}>
        {EventsData.map((data, index) => {
          return <EventCard key={index} Data={data} index={index} />;
        })}
      </Slider>
    </div>
    </section>
  );
};

export default HomeEvent;
