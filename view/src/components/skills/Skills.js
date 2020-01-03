import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Skills.css'

const styles = theme => ({  
  text: {
    fontFamily: 'Montserrat',
    fontStyle:'sans-serif',
    color: 'white',
  },
  description: {
    fontFamily: 'Montserrat',
    fontStyle:'sans-serif',
    color: 'white',
    textAlign: 'center'
  },
  title: {
    fontFamily: 'Montserrat',
    fontStyle:'sans-serif',
    color: 'white',
    paddingTop: '40px',
  },
  descContainer: {
    marginTop: '15px',
    padding: '10px'
  
  },
  button: {
    border: '1px solid white',
    color: 'white',
    marginTop:'20px',
    marginRight: '20px',
  },
  buttonContainer: {
    position: 'absolute',
    right: '10px',
    top: '300px',
    bottom: '0px'   

  }
});


class Skills extends Component {

  constructor(props) {
    super(props); 

  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className = "Skills-container">
        <Typography gutterBottom variant="h4" component="h2" className = {classes.title}>
          {this.props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className = {classes.description}>
          {this.props.description}
        </Typography>
        <div className = {classes.descContainer}>
          <div>
            {this.props.react}
            {this.props.materialui}
            {this.props.bootstrap}
            {this.props.phaser}
            {this.props.jquery}
            {this.props.xhtml}
          </div>
          <div>
            {this.props.node}
            {this.props.socketio}
            {this.props.nodemailer}
            {this.props.express}
            {this.props.jwt}
            {this.props.firebasedb}
            {this.props.java}
            {this.props.mysql}
          </div>
          <div>
            {this.props.heroku}
            {this.props.firebase}
            {this.props.amazon}
            {this.props.pm2}
            {this.props.nginx}
            {this.props.android}
          </div>
        </div>
        <div className = {classes.buttonContainer}> 
          <Button target = "blank" href = {this.props.url} className = {classes.button} variant = "outlined" onClick = {this.props.growEvent}> 
            <span className = "Skills-text1"> See it Online </span>
          </Button>
          <Button target = "blank" href = {this.props.url} className = {classes.button} variant = "outlined" onClick = {this.props.growEvent}> 
            <span className = "Skills-text2"> View Source Code </span>
          </Button>
        </div>
      </div>
    )
  }
}
export default withStyles(styles, { withTheme: true })(Skills);