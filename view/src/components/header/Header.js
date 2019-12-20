import React, {Component} from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div className= "Header-container">
        <p className = "Header-name">Joeco Fong</p>
        <p className = "Header-contact">(778) 883 6220 – joecofg@gmail.com</p>
        <p className = "Header-github">https://github.com/joecof</p>
      </div>
    )
  }
}

export default Header;