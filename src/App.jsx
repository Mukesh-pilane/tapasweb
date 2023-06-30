import React from 'react';
import Home from './pages/Home/Home'
import Loader from './components/Loader/Loader';
import MobileNav from './components/MobileNav/MobileNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from './components/Aboutus';
import Events from './components/Events';
import Contactus from './components/Contactus';
import Team from './components/Team';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
    <Navbar />
<MobileNav/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path="/contact" element={<Contactus />} />
        <Route path="/team" element={<Team/>} />

        <Route path="*"  />
    </Routes>
    <Footer/>

</BrowserRouter>
     
     
    </div>
  );
}

export default App;