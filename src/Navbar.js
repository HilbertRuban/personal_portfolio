import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Navbar = () => {
  return (
    <nav  className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
    <div className="container">

  <Link to = 'home' smooth={true} offset={-110} data-aos='flip-right' className="navbar-brand" href="#"><h1 className="js">HILBERT</h1></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color:'white',border:'none'}}/>
  </button>

  <div data-aos='fade-down' className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to = 'home' className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to = 'about' className="nav-link" offset={-110} href="#">ABOUT ME</Link>
      </li>
      
      <li className="nav-item">
        <Link smooth={true} to = 'skills' className="nav-link" offset={-110} href="#">SKILLS</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to = 'portfolio' className="nav-link" offset={-110} href="#">PORTFOLIO</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to = 'contact' className="nav-link" offset={-110} href="#">CONTACT</Link>
      </li>
    </ul>
    
    </div>
  </div>
</nav>
  )
}

export default Navbar
