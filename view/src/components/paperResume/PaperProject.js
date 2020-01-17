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

  render() {
    const { classes } = this.props;

    return (
      <div className = "Paper-projects">
        <p className="Paper-projects-title">
            {this.props.title}  	<span className = {classes.date}> {this.props.date} </span>   
        </p>
        <p className="Paper-projects-title">
          <a href={this.props.url} target = "blank"> {this.props.url} </a>             
        </p>
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
