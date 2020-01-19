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
    padding: '10px',
  },
  button: {
    border: '1px solid white',
    color: 'white',
    marginTop:'10px',
    marginRight: '10px',
    height: '40px'
  },
  icon: {
    width: '20%'
  }
});


class Skills extends Component {
  
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
          <div className = {classes.icons}>
            {this.props.react}
            {this.props.materialui}
            {this.props.bootstrap}
            {this.props.phaser}
            {this.props.jquery}
            {this.props.xhtml}
          </div>
          <div className = {classes.icons}>
            {this.props.node}
            {this.props.socketio}
            {/* {this.props.nodemailer} */}
            {this.props.express}
            {this.props.jwt}
            {this.props.firebasedb}
            {this.props.java}
            {this.props.mysql}
          </div>
          <div className = {classes.icons}>
            {this.props.heroku}
            {this.props.firebase}
            {this.props.amazon}
            {this.props.pm2}
            {this.props.nginx}
            {this.props.android}
          </div>
        </div>
        <div className = "Skills-button-container"> 

          {window.innerWidth < 450 ? 
            <Button target = "blank" href = {this.props.url} className = {classes.button} variant = "outlined" onClick = {this.props.growEvent}> 
              <span className = "Skills-text1"> See it Online </span>
            </Button>
            :
            <div className = "Skills-button-container2">
            <Button target = "blank" href = {this.props.url} className = {classes.button} variant = "outlined" onClick = {this.props.growEvent}> 
              <span className = "Skills-text1"> See it Online </span>
            </Button>
            <Button target = "blank" href = {this.props.repoLink} className = {classes.button} variant = "outlined" onClick = {this.props.growEvent}> 
            <span className = "Skills-text2"> See Source Code </span>
            </Button>
            </div>
          }
        </div>
      </div>
    )
  }
}
export default withStyles(styles, { withTheme: true })(Skills);