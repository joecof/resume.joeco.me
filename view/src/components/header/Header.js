import React, {Component} from 'react';
import Collapse from '@material-ui/core/Collapse';
import Typed from 'typed.js';
import tick from '../../images/tick.png';

import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    
    this.state = ({
      checked: true,
    })

    this.el = React.createRef();

  }

  componentDidMount() {

    const options = {
      strings: ['Joeco Fong'],
      typeSpeed: 200,
      onComplete: this.test
    };
    
    this.typed = new Typed(this.el, options);

  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {

    return (
      
      <div className= "Header-container">
        <Collapse in={this.state.checked}>
          <div>
          <span
            style={{ whiteSpace: 'pre',   'paddingTop':'90px'}}
            ref={(el) => { this.el = el; }}
            className = "Header-name"
          />
          </div>
          <p className = "Header-contact"> (778) 883 6220 – joecofg@gmail.com</p>
          <a className = "Header-github" href="https://github.com/joecof">https://github.com/joecof</a>
          <p className = "Header-desc1"> Engineer <img src = {tick} className = "Header-tick"></img> 
            <br/>
            <br/> Developer<img src = {tick} className = "Header-tick"></img>
            <br/>
            <br/> Problem Solver<img src = {tick} className = "Header-tick"></img>
          </p>

        </Collapse>
      </div>
    )
  }
}

export default Header;