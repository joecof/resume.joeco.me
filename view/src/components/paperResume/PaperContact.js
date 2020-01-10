import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import './PaperContact.css';

const styles = theme => ({  
  paper: {
    margin: theme.spacing(1),
  },
  title: {
    color: 'black',
    display: 'block',
    fontSize: '12pt',
    letterSpacing: '2px',
  }, 
  nameTitle: {
    fontWeight: 'bold',
    fontSize: '37pt',
    letterSpacing: '2px',
  },
});

class PaperContact extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className = "Paper-Header">
          <Typography variant="h4" className={classes.nameTitle} >
            {this.props.title}
          </Typography>
          <Typography variant="h8" className={classes.title}>
            {this.props.contact}
          </Typography>           
          <Typography variant="h8" className={classes.title}>
            <a href={this.props.url}> {this.props.url}</a>
          </Typography>
        </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaperContact);
