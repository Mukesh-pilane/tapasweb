import React from 'react'
import { NavLink,useLocation } from 'react-router-dom';
import logomob from "../../assets/mobtapas.png"
import "./MobileNav.css"
import {HiUserGroup} from 'react-icons/hi'
import {BsChatSquare} from 'react-icons/bs'
import {FaRegUser,FaAward} from 'react-icons/fa6'

import {RiHomeLine} from 'react-icons/ri'
const MobileNav = () => {
    const location = useLocation();

    const activeitem=()=>{

    }
  return (
    <div className="mobilenav-container">
        <div className="navigation-shawdow">


        </div>
        <div className="indicator-tripper">

<div className='Mobile-navigation'>
        <ul>
            <li className={location.pathname === "/aboutus" ? "active-item" : ""}>
                <NavLink to={"/aboutus"} className={({ isActive }) => `${isActive ? "active-item" : ""} `}>
                    <span className="item-icon"><FaRegUser/></ span>
                    <span className="item-text">About</span>
                </NavLink>

            </li>
            <li className={location.pathname === "/events" ? "active-item" : ""}>
            <NavLink to={"/events"} className={({ isActive }) => `${isActive ? "active-item" : ""} `}>
                    <span className="item-icon"><FaAward /></span>
                    <span className="item-text">Events</span>
                </NavLink>

            </li>
            <li  className={location.pathname === "/" ? "active-item home-active" : ""}>
            <NavLink to={"/"} className={({ isActive }) => `${isActive ? "active-item" : ""} `}>
                    <span className="item-icon">{location.pathname === "/" ?<img src={logomob} alt="Logo" />:<RiHomeLine />}</span>
                    <span className="item-text">Home</span>
                </NavLink>

            </li>
            <li className={location.pathname === "/team" ? "active-item" : ""}>
            <NavLink to={"/team"} className={({ isActive }) => `${isActive ? "active-item" : ""} `}>
                    <span className="item-icon"><HiUserGroup /></span>
                    <span className="item-text">Team</span>
                </NavLink>

            </li>
            <li className={location.pathname === "/contact" ? "active-item" : ""}>
            <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "active-item" : ""} `}>
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
    </div>
    
  )
}

export default MobileNav