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

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = "Paper-skills">
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

export default withStyles(styles, { withTheme: true })(PaperSkills);
