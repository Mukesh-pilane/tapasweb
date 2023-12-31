import Card from '../../components/Card/Card';
import Slider from '../../components/Slider/Slider'

import Testimonials from '../../components/Testimonials/Testimonials'
import SubHero from '../../components/SubHero/SubHero'
import { JoinTeam } from '../../assets/AllSvg';
import HomeEvent from '../../components/HomeEvent/HomeEvent';
import './Home.css'

import practices from '../../data/dailypractices';
const Home = () => {
  return (
    <>


      <Slider />
      <SubHero />
      <HomeEvent />
      <section className="dailyPractices">
      <div className="dailyPractices__container" >

<h2 className="gradient-text" style={{ marginBottom: "2rem" }}
>Daily Practices</h2>
<div
  className="card-container"
>
  {
    practices.map((practice, index) => {
      return(
        <Card 
        key={index}
        {...practice}
        />
      )
    })
  }
</div>
</div>  
      </section>
      <section className="join">
      <div className="join-our-team-container">
      <div className="bottom-image-with-text-parent">
        <div className="title">
         Join Our Team
        </div>
        <div className="subtext">
        Take a deep breath, because it's time to connect with us, your ultimate meditation club. 
        </div>
        <div className="join-button">
          Join us
        </div>
<JoinTeam className="svg-image"/>
      </div>
    </div>
    </section>
      <Testimonials />
    </>
  )
}

export default Home;