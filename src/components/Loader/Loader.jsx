import React, { useEffect, useState } from 'react'
import './Loader.css';
import logo from '../../assets/tapas-logo.gif'
const Loader = () => {

  return (
<div className="loader">
      <div className="centre-loader">
        <div className="loading">
          <div className="animated-image">
            <img src={logo} alt="loader" className="animate-img" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader