import Card from '../../components/Card/Card';
import Slider from '../../components/Slider/Slider'

import Testimonials from '../../components/Testimonials/Testimonials'
import SubHero from '../../components/SubHero/SubHero'
import { JoinTeam } from '../../assets/AllSvg';
import './Home.css'
const Home = () => {
  return (
    <>


      <Slider />
      <SubHero />
      <div className="container2" >

        <h2 className="gradient-text" style={{ marginBottom: "2rem" }}
        >Daily Practices</h2>
        <div
          className="card-container"
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="join-our-team-container">
      <div className="bottom-image-with-text-parent">
        <div className="title">
          Hire from us
        </div>
        <div className="subtext">
          Become a partner companies and be first in line to the amazing talent that graduates from our cohorts
        </div>
        <div className="join-button">
          Get in touch
        </div>
<JoinTeam className="svg-image"/>
      </div>
    </div>
      <Testimonials />
    </>
  )
}

export default Home;