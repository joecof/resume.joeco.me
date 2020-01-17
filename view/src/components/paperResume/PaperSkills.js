import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import './PaperSkills.css';

const styles = theme => ({  
  paper: {
    margin: theme.spacing(1),
  },
  projects: {
    textAlign: 'left',
    fontSize: '12pt',
    letterSpacing: '2px',
  }, 
  date: {
    float:'right',
    fontSize: '12pt',
  }
});

class PaperSkills extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className = "Paper-skills">
        <div className = "PaperSkills-container1">
          <p className= "Paper-skills-title" >
            {this.props.title1} 
          </p>
          <ul>
            <li>
              {this.props.d1}
            </li>
          </ul>
          <p className="Paper-skills-title">
            {this.props.title2} 
          </p>
          <ul>
            <li>
              {this.props.d2}
            </li>
          </ul>
        </div>
      <div className = "PaperSkills-container2">
        <p className="Paper-skills-title">
          {this.props.title3} 
        </p>
        <ul>
          <li>
            {this.props.d3}
          </li>
        </ul>
          <p className="Paper-skills-title">
            {this.props.title4} 
          </p>
        <ul>
          <li>
            {this.props.d4}
          </li>
        </ul>
      </div>
    </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaperSkills);
