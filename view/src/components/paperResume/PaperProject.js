import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import './PaperProject.css';

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

class PaperProject extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <div className = "Paper-projects">
        <Typography variant="h6" className={classes.projects}>
            {this.props.title}  	<span className = {classes.date}> {this.props.date} </span>   
          </Typography>
          <Typography variant="h8" className={classes.projects}>
            <a href={this.props.url} target = "blank"> {this.props.url} </a>             
          </Typography>
            <ul>
              <li>
                {this.props.d1}    
              </li>
              <li>
                {this.props.d2}    
              </li>
              <li>
                {this.props.d3}    
              </li>
              <li>
                {this.props.d4}    
              </li>
            </ul>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaperProject);
