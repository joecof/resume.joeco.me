import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({  
  paper: {
    margin: theme.spacing(1),
  },
  PaperSkills: {
    textAlign: 'left',
    fontSize: '12pt',
    letterSpacing: '2px',
  }, 
  paperSkillsDesc: {
    paddingTop: 15,
    paddingBottom: 15,
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
      <div className = {classes.paperSkills}>
        <p className = {classes.paperSkillsDesc}> <i> Skills/Frameworks: {this.props.skill}</i> </p>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaperSkills);
