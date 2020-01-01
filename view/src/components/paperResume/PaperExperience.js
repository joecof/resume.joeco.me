import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import './PaperExperience.css';

const styles = theme => ({  
  paper: {
    margin: theme.spacing(1),
  },
  experience: {
    textAlign: 'left',
    fontSize: '12pt',
    letterSpacing: '2px',
  }, 
  date: {
    float:'right',
    fontSize: '12pt',
  }
});

class PaperExperience extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <div className = "Paper-experience">
        <Typography variant="h6" className={classes.experience}>
           {this.props.title}	<span className = {classes.date}> {this.props.date} </span>     
         </Typography>
         <Typography variant="h8" className={classes.experience}>
           {this.props.role}  <span className = {classes.date}> {this.props.location} </span>         
         </Typography>
         <ul>
           <li>
             {this.props.d1}
           </li>
           <li>
             {this.props.d2}
           </li>
         </ul>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaperExperience);
