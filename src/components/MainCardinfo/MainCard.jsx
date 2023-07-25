import React from "react";
import './MainCard.css'
import { motion } from "framer-motion";

const MainCard = ({ name, imageUrl, position }) => {
  return (
    <div className="main-card">
      <motion.img  whileHover={{ scale: 1.02 }}
    style={{ outline: "rgb(0, 0, 0) none 0px", transform: "none" }}src={imageUrl} alt={name} className="main-card-image"   loading="lazy"/>
      <div className="main-card-content">
        <h2 className="main-card-name">{name}</h2>
        <p className="main-card-position">{position}</p>
      </div>
    </div>
  );
};

export default MainCard;
