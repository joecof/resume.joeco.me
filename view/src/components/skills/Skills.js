import React, {Component} from 'react';
import Frontend from './Frontend';
import Backend from './Backend';


import './Skills.css';


class Skills extends Component {

  render() {
    return (
      <div className= "Skills-container">
        <p className = "Skills-name">Skills and Qualifications</p>
        <div className = "Skills-radarContainer">
          <Frontend/>
          <Backend/>
        </div>
      </div>
    )
  }
}

export default Skills;