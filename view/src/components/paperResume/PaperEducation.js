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
    fontSize: '12pt',
    letterSpacing: '2px',
  }, 
  date: {
    float:'right',
    fontSize: '12pt',
  }
});

class PaperEducation extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <div className = "Paper-education">
        <Typography variant="h6" className={classes.education}>
           {this.props.title} <span className = {classes.date}> {this.props.date} </span>
          </Typography>
          <ul>
            <li>
              {this.props.d1}          
            </li>
          </ul>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaperEducation);
