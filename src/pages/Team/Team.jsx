import React from 'react'
import TeamSlider from '../../components/Slider/TeamSlider'
import MainCard from '../../components/MainCardinfo/MainCard'
import Vaibhav from '../../assets/images/team/Vaibhav.jpg'
import Susmit from '../../assets/images/team/Susmit.jpg'
import Sahil from '../../assets/images/team/Sahil.jpg'
import Shraddha from '../../assets/images/team/Shradha.jpg'
import Vignesh from '../../assets/images/team/Vignesh.jpg'
import Ajay from '../../assets/images/team/Ajay.jpg'
import Shweta from '../../assets/images/team/Shweta.jpg'
import Komal from '../../assets/images/team/Komal.jpg'

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
        name="Vaibhav"
        imageUrl={Vaibhav}
        position="President"
      />
      <MainCard
        name="Sahil"
        imageUrl= {Sahil}
        position="Secretary"
      />
      <MainCard
        name="Ajay"
        imageUrl= {Ajay}
        position="Social media head"
      /><MainCard
      name="Shraddha"
      imageUrl= {Shraddha}
      position="Creative head"
    /><MainCard
    name="Ketaki"
    imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
    position="Publicity head"
  /><MainCard
  name="Vignesh"
  imageUrl= {Vignesh}
  position="Coverage head"
/>
<MainCard
  name="Susmit"
  imageUrl={Susmit}
  position="Graphics head"
/>
<MainCard
        name="Shweta"
        imageUrl={Shweta}
        position="Event head"
      />
      <MainCard
        name="Komal"
        imageUrl={Komal}
        position="Content head"
      />
    </div>
    </div>

   </section>
   
    </>
  )
}

export default Team