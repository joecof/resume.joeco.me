import React, {Component} from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import handleViewport from 'react-in-viewport';

import './Skills.css';

class Skills extends Component {

  render() {
    return (
      <div className= "Skills-container">
        <p className = "Skills-name">Skills and Qualifications</p>
        <div className = "Skills-radarContainer">
          {this.props.inViewport ? <Frontend/> : null}
          {this.props.inViewport ? <Backend/> : null}
        </div>
      </div>
    )
  }
}

const mySkills = handleViewport(Skills);
export default mySkills;