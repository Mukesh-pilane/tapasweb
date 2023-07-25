import React from 'react'
import "./Aboutus.css"
import { LiaLocationArrowSolid } from 'react-icons/lia'
import { motion } from "framer-motion";

const Aboutus = () => {
  return (
    <>
      <div className="info-container">
        <p className="info-title">
          What is <span className="info-highlight gradient-text">Tapas-Pce?</span>
        </p>
        <div className="info-content">
          <p className="info-paragraph">
            TAPAS-PCE is a wellness and spirituality student club formed on 16th October 2019. TAPAS, in collaboration with Heartfulness, launched with the aim to spread the benefits of meditation to stressed-out students. It is a wellness and meditation club that emphasizes the well-being of student’s mental health. Here we organize various meditation sessions, yoga sessions, other rejuvenating events, and trips, etc.
          </p>
          <p className="info-paragraph">
            There are several events organized by the TAPAS-PCE Committee. These events include International Youth Conference in Kanha Shantivanam, Dhyanotsav, Dhyanratri, 21 Days Meditation Challenge, and many more sessions. The main focus of all the events is to make awareness about meditation and also the benefits of meditation.
          </p>
          <p className="info-paragraph">
            TAPAS-PCE  and Pillai College have signed an MOU to promote mindfulness and well-being among college students. Through this partnership, TAPAS is offering meditation sessions and workshops at Pillai College, fostering a positive and balanced learning environment.
          </p>


        </div>
        <div className="info-content2">

          <h3 className='info-title2 gradient-text'>Our Core Objectives:-</h3>
          <ul>
            <li>
              <motion.span

                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100,delay: 0.6  }}
  
              >
                <LiaLocationArrowSolid className='st' style={{transform:"rotate(45deg)"}} /></motion.span>
              <span>Educating the Youth:</span> We are dedicated to educating the youth about the immense benefits of meditation. By instilling this practice at an early age, we aim to empower them with the tools to lead balanced, focused, and fulfilling lives.
            </li>
            <li>
              <motion.span

                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100,delay: 0.6 }}
              > <LiaLocationArrowSolid className='st' style={{transform:"rotate(45deg)"}} /></motion.span><span>Daily Practice for All: </span>Our vision is to make meditation a regular practice, seamlessly integrated into the daily routines of students and teachers from all walks of life. We believe that a mindful mind and a compassionate heart lead to a brighter future.
            </li>
            <li>
              <motion.span

                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100,delay: 0.6  }}
  
              > <LiaLocationArrowSolid className='st' style={{transform:"rotate(45deg)"}} /></motion.span><span>Creating Stress-Free Campuses:</span> We are committed to creating stress-free campuses where faculty, staff, students, and parents can find solace and inner peace. Through a sustainable long-term program, we aim to foster a harmonious environment for personal growth and well-being.
            </li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Aboutus