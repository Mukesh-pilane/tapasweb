import Card from '../../components/Card/Card';
import Slider from '../../components/Slider/Slider'

import Testimonials from '../../components/Testimonials/Testimonials'
import SubHero from '../../components/SubHero/SubHero'

import './Home.css'
const Home = ()=>{
  return(
    <>

    
    <Slider />
    <SubHero />
    <div className="container2">

        <h2 className="gradient-text" style={{marginBottom:"2rem"}}
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
    <Testimonials />
    </>
    )
}

export default Home;