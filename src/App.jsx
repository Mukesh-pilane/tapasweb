import React, { useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import Loader from './components/Loader/Loader';
import MobileNav from './components/MobileNav/MobileNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from './components/Aboutus/Aboutus';
import Events from './components/Events';
import Contactus from './components/Contactus';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating content loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BrowserRouter>
            <Navbar />
            <MobileNav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/aboutus' element={<Aboutus />} />
              <Route path='/events' element={<Events />} />
              <Route path="/contact" element={<Contactus />} />
              <Route path="/team" element={<Team />} />
              <Route path="*" />
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
