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
  }, 
  skills: {
    textAlign: 'left',
    fontSize: '12pt',
    letterSpacing: '2px',
    display: 'block'
  }
});

class PaperSkills extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className = "Paper-skills">
        <div className = "PaperSkills-container1">
          <Typography variant="h6" className={classes.skills}>
            {this.props.title1} 
          </Typography>
          <ul>
            <li>
              {this.props.d1}
            </li>
          </ul>
          <Typography variant="h6" className={classes.skills}>
            {this.props.title2} 
          </Typography>
          <ul>
            <li>
              {this.props.d2}
            </li>
          </ul>
        </div>
      <div className = "PaperSkills-container2">
        <Typography variant="h6" className={classes.skills}>
          {this.props.title3} 
        </Typography>
        <ul>
          <li>
            {this.props.d3}
          </li>
        </ul>
        <Typography variant="h6" className={classes.skills}>
          {this.props.title4} 
        </Typography>
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
