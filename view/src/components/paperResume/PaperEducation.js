import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import './PaperEducation.css';

const styles = theme => ({  
  paper: {
    margin: theme.spacing(1),
  },
  education: {
    textAlign: 'left',
    letterSpacing: '2px',
  }, 
  date: {
    float:'right',
  }
});

class PaperEducation extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className = "Paper-education">
        <p className= "Paper-education-text">
          {this.props.title} <span className = {classes.date}> {this.props.date} </span>
        </p>
        <br/>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaperEducation);
