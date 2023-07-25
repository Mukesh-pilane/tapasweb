import React from 'react'
import TeamSlider from '../../components/Slider/TeamSlider'
import MainCard from '../../components/MainCardinfo/MainCard'
import "./Team.css"

const Team = () => {
  return (
    <>
      <TeamSlider />
      <section className='team-main'>
    <div className="team-container">
    <h1 className="gradient-text">Our Team</h1>
    <div className="member-info">
    <MainCard
        name="John Doe"
        imageUrl="https://randomuser.me/api/portraits/men/1.jpg"
        position="Web Developer"
      />
      <MainCard
        name="Jane Smith"
        imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
        position="Graphic Designer"
      />
      <MainCard
        name="Jane Smith"
        imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
        position="Graphic Designer"
      /><MainCard
      name="Jane Smith"
      imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
      position="Graphic Designer"
    /><MainCard
    name="Jane Smith"
    imageUrl="https://randomuser.me/api/portraits/men/4.jpg"
    position="Graphic Designer"
  /><MainCard
  name="Jane Smith"
  imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
  position="Graphic Designer"
/><MainCard
        name="Jane Smith"
        imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
        position="Graphic Designer"
      />

    </div>
    </div>

   </section>
   
    </>
  )
}

export default Team