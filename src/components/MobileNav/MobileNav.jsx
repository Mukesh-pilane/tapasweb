import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logomob from "../../assets/mobtapas.png";
import "./MobileNav.css";
import { HiUserGroup } from 'react-icons/hi';
import { BsChatSquare } from 'react-icons/bs';
import { FaRegUser, FaAward } from 'react-icons/fa6';
import { RiHomeLine } from 'react-icons/ri';
import { motion } from 'framer-motion'
const MobileNav = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(true);
  const URL = import.meta.env.VITE_URL
  console.log(URL);
  useEffect(() => {
    const handleScroll = () => {
        const scrollY = (window.scrollY || window.pageYOffset) + window.innerHeight+53;
        const scrollThreshold = document.documentElement.scrollHeight;
        setIsScrolled(!(scrollY > scrollThreshold));
      };
    window.addEventListener('scroll', handleScroll);
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll);

    };
  }, [window.scrollY]);

  return (
    <motion.div 
    className={`mobilenav-container`}
    initial={{ y: '100%' }}
    animate={{ y: isScrolled ? '0%' : window.innerWidth <= 768 ? "-50px" :'-75px' }}
    transition={{ duration: 0.5 }}
    >
      <div className="navigation-shawdow">


</div>
<div className="indicator-tripper">

<div className='Mobile-navigation'>
<ul>
    <li className={location.pathname === "/aboutus" ? "active-item" : ""}>
        <NavLink to={`${URL}/aboutus`} className={({ isActive }) => `${isActive ? "active-item" : ""} `}>
            <span className="item-icon"><FaRegUser/></ span>
            <span className="item-text">About</span>
        </NavLink>

    </li>
    <li className={location.pathname === "/events" ? "active-item" : ""}>
    <NavLink to={`${URL}/events`} className={({ isActive }) => `${isActive ? "active-item" : ""} `}>
            <span className="item-icon"><FaAward /></span>
            <span className="item-text">Events</span>
        </NavLink>

    </li>
    <li  className={location.pathname === "/" ? "active-item home-active" : ""}>
    <NavLink to={`${URL}/`} className={({ isActive }) => `${isActive ? "active-item" : ""} `}>
            <span className="item-icon">{location.pathname === "/" ?<img src={logomob} alt="Logo" />:<RiHomeLine />}</span>
            <span className="item-text">Home</span>
        </NavLink>

    </li>
    <li className={location.pathname === "/team" ? "active-item" : ""}>
    <NavLink to={`${URL}/team`} className={({ isActive }) => `${isActive ? "active-item" : ""} `}>
            <span className="item-icon"><HiUserGroup /></span>
            <span className="item-text">Team</span>
        </NavLink>

    </li>
    <li className={location.pathname === "/contact" ? "active-item" : ""}>
    <NavLink to={`${URL}/contact`} className={({ isActive }) => `${isActive ? "active-item" : ""} `}>
            <span className="item-icon"><BsChatSquare /></span>
            <span className="item-text">Contact</span>
        </NavLink>

    </li>
    <div className={`indicator ${location.pathname === "/" ? "home-active-indicator" : ""}`}
    >   
        <div></div>
    </div>
</ul>

</div>
</div>
    </motion.div>
  );
};

export default MobileNav;