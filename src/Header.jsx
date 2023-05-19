import React, { useState } from 'react'
import img from './Images/plane.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import YouTubeClone from './YoutubeClone';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(true); // State for tracking the menu open/close status

  const menu = () => {
     const dropdown = document.querySelector(".dropdown-container");
     dropdown.classList.toggle("active"); // Toggle the 'active' class on the dropdown container
     const links = document.querySelectorAll("ol li a");
     links.forEach((link) => link.classList.toggle("active")); // Toggle the 'active' class on each link in the dropdown
     setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close status
  }

  return (
    <div>
      <div className='header-container'>
        <div className="dropdown-container">
          <div className='social-dropdown'>
            {/* Social media links */}
            <a href='https://web.facebook.com/olamide.daniel.581/?_rdc=1&_rdr' className="social-media-link">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href='mailto:danielolamide141@gmail.com ' className="social-media-link">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href='https://www.linkedin.com/in/olamide-daniel-812039243?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBgGEK%2BqMSaqM3amwcmgV2Q%3D%3D' className="social-media-link">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://api.whatsapp.com/message/MQX3O3MI2UR4L1?autoload=1&app_absent=0' className="social-media-link">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
          <ol>
            {/* Dropdown menu links */}
            <li><a onClick={menu} href="#">Home</a></li>
            <li><a onClick={menu} href="#About">About</a></li>
            <li><a onClick={menu} href="#Developer">Developer</a></li>
            <li><a onClick={menu} href="#Video">Video</a></li>
          </ol>
        </div>
        <header>
          <h2>LinkTube</h2>
          <nav>
            <ul>
              {/* Header navigation links */}
              <li><a href="/">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Developer">Developer</a></li>
              <li><a href="#Video">Video</a></li>
            </ul>
          </nav>
          <div className="dropdown">
            {/* Menu toggle button */}
            <button onClick={menu}><FontAwesomeIcon icon={isMenuOpen ? faBars : faTimes} /></button>
          </div>
        </header>
        <div>
          <div className='Home-container' id='About'>
            <p>
              Welcome to <span>LinkTube</span>, the one-stop destination for effortless access to thousands of your favorite YouTube channels.
              Say goodbye to buffering and limitations as you explore a vast collection of videos, all just a tap away. With LinkTube's user-friendly interface, you can easily download these videos to your phone for on-the-go enjoyment. Experience a new level of convenience and integration as LinkTube revolutionizes your YouTube viewing experience.
              Unlock a world of entertainment with LinkTube and elevate your YouTube journey to new heights.
            </p>
            <div className="video-btn">
              <button onClick={() => window.scrollTo(0, window.innerHeight / 2)}>Video</button>
            </div>
          </div>
        </div>
      </div>
      <section className="About-container">
        <div id='Developer' className="plane-con">
          {/* Developer image */}
          <img src={img} />
        </div>
        <div>
          <h3>
            <span>LinkTube</span> was developed by oladax.
          </h3>
          <div className="social-media">
            {/* Social media links */}
            <a href='https://web.facebook.com/olamide.daniel.581/?_rdc=1&_rdr' className="social-media-link">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href='mailto:danielolamide141@gmail.com ' className="social-media-link">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href='https://www.linkedin.com/in/olamide-daniel-812039243?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBgGEK%2BqMSaqM3amwcmgV2Q%3D%3D' className="social-media-link">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://api.whatsapp.com/message/MQX3O3MI2UR4L1?autoload=1&app_absent=0' className="social-media-link">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </section>
      <YouTubeClone/>
    </div>
  )
}

export default Header
