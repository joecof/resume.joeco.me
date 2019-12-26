import React, {Component} from 'react';
import Collapse from '@material-ui/core/Collapse';

import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    
    this.state = ({
      checked: true,
    })
  }

  render() {
    return (
      
      <div className= "Header-container">
        <Collapse in={this.state.checked}>
          <p className = "Header-name">Joeco Fong</p>
          <p className = "Header-contact">(778) 883 6220 – joecofg@gmail.com</p>
          <p className = "Header-github">https://github.com/joecof</p>
        </Collapse>
      </div>
    )
  }
}

export default Header;