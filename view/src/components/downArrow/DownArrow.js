import React, {Component} from 'react';
import downArrow from '../../images/arrow-down.png'; 
import anime from 'animejs';

import './DownArrow.css';


class DownArrow extends Component {

  componentDidMount() {

    anime({
      loop: true,
      targets: '.DownArrow-image',
      opacity: [0, 20],
      delay: 1000,
      easing: 'easeInOutQuad',
      duration: 1000,
    });
  }

  render() {
    return(
      <div className = "DownArrow-container"> 
        <img className= "DownArrow-image" src={downArrow} alt="downArrow" />
      </div>
    )
  }
  
}

export default DownArrow;