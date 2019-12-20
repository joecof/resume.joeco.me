import React, {Component} from 'react';
import github from '../../images/github-logo.png'; 
import linkedin from '../../images/linkedin.png'; 
import facebook from '../../images/facebook.png'; 
import gmail from '../../images/gmail.png'; 

import './Navbar.css';

class Navbar extends Component {

  render() {
    return(
      <div className = "Navbar-container">
        <img className= "Navbar-github" src={github} alt="github" />
        <img className= "Navbar-linkedin" src={linkedin} alt="linkedin" />
        <img className= "Navbar-facebook" src={facebook} alt="facebook" />
        <img className= "Navbar-gmail" src={gmail} alt="gmail" />
      </div>
    )
  }
}

export default Navbar;