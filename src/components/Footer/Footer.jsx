import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi"
import Wave from 'react-wavify'
import { Link } from 'react-router-dom';

import "./Footer.css"

const Footer = () => {
  const emailAddress = 'tapas.pce@mes.ac.in';
  const address = 'SRCM Heartfulness Meditation Centre'
  const phoneNumber = '123-456-7890';
  const navigate = useNavigate();
  return (

    <div className='footer'>

      <Wave fill="url(#gradient)" className="wave" options={{ points: 2, speed: 0.26, amplitude: 90 }}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(98)">
            <stop offset="9%" stopColor="#ce9ffc" />
            <stop offset="90%" stopColor="#7367f0" />
          </linearGradient>
        </defs>
      </Wave>

      <footer className="footer-section">

        <div className="container ">
          <div className="footer-cta ">
            <div className="footer-cta-column">
              <div className="single-cta">
                <FaMapMarkerAlt className='cta-icons' />
                <div className="cta-text">
                  <h4 className="cta-title">Find us</h4>
                  <span className="cta-info" >
                    <Link to={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank">

                      Navi Mumbai, <br></br>Maharashtra India
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="footer-cta-column">
              <div className="single-cta">
                <BsFillTelephoneFill className='cta-icons' />
                <div className="cta-text">
                  <h4 className="cta-title">Call us</h4>
                  <span className="cta-info"><Link to={`tel:${phoneNumber}`}>{phoneNumber}</Link></span>
                </div>
              </div>
            </div>
            <div className="footer-cta-column">
              <div className="single-cta">
                <HiMailOpen className='cta-icons' />
                <div className="cta-text">
                  <h4 className="cta-title">Mail us</h4>
                  <span className="cta-info" ><Link to={`mailto:${emailAddress}`}>{emailAddress}</Link></span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-content ">
            <div className="row">
              <div className="mission-vision footer-cta-column">
                <div className='footer-widget-heading'>
                  <h3 className='hover-underline-animation'>Mission</h3>
                </div>
                <p className='mission-p'>TAPAS-PCE organizes various informative sessions on topics including meditation, mental health, inner peace, etc.</p>
                <div className='footer-widget-heading'>
                  <h3 className='hover-underline-animation'>Vision</h3>
                </div>
                <p className='vision-p'>TAPAS-PCE comes under the umbrella of heartfulness, where we follow the four simple steps relax, meditate, rejuvenate, and connect.</p>

              </div>
              <div className="footer-cta-column">

                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3 className='hover-underline-animation'>Useful Links</h3>
                  </div>
                  <ul>
                    <li><Link to={"https://www.daaji.org/"} target="_blank">Daaji</Link></li>
                    <li><Link to={"https://kanha.sahajmarg.org/"} target="_blank">Kanha Shanti Vanam</Link></li>
                    <li><Link to={"https://heartfulness.org/kanha/green-initiatives"} target="_blank">Green Kanha</Link></li>
                    <li><Link to={"http://sahajmarg.org/"} target="_blank">Sahaj Marg</Link></li>
                    <li><Link to={"http://www.srcm.org/"} target="_blank">Shri Ram Chandra Mission</Link></li>
                    <li><Link to={"https://heartfulness.org/gurugram/"} target="_blank">Gurugram Meditation Center</Link></li>

                    <li><Link to={"https://www.spiritualityfoundation.org/"} target="_blank"> Spirituality Foundation</Link></li>


                  </ul>
                </div>
              </div>
              <div className="footer-cta-column">
                <div className="footer-widget">

                  <span className='footer-social-icon hover-underline-animation'>Follow us</span>
                  <div className="socialIcons">
                  <Link to={"https://www.facebook.com/profile.php?id=100092632995551&mibextid=ZbWKwL"} target="_blank">
                    <span className="icon facebook-bg">
                 
                      <FaFacebookF />
         
                    </span>
                    </Link>
                    <Link to={"https://instagram.com/tapas.pce?igshid=MzRlODBiNWFlZA=="} target="_blank">
                    <span className="icon">
                    
                      <FaInstagram />

                    </span>
                    </Link>
                    <Link to={"https://www.linkedin.com/in/tapas-pce-ab809a1a9"} target="_blank">
                    <span className="icon">
                      <FaLinkedin />
                    </span>
                    </Link>
                  </div>
                </div>
                <div className="footer-legal">
                  <div className='footer-widget-heading'>
                    <h3 className='hover-underline-animation'>Legal</h3>
                  </div>
                  <ul className="footer-legal-list">
                    <li className="legal-item ">
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li className="legal-item ">
                      <Link to="#">Terms of Use</Link>
                    </li>
                  </ul>
                </div>

              </div>


            </div>
          </div>
        </div>
      </footer>
      <div className="copyright-area">
        <div className="container">


          <div className="copyright-text">
            <p>Copyright &copy; 2023, All Right Reserved @Tapas-PCE</p>
          </div>



        </div>

      </div>

    </div>

  )
}


export default Footer;
