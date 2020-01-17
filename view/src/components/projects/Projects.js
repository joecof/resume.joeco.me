import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Project from './Project';
import './Projects.css'
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import tempify from '../../images/tempify.png';
import operationRegen from '../../images/operation-regen.png';
import coachable from '../../images/coachable.png';
import bookapp from '../../images/bookapp.png';
import chatApp from '../../images/chatapp.png';
import joecome from '../../images/joecome.png';
import react from '../../images/react-icon.png'; 
import materialui from '../../images/materialui-icon.png'; 
import node from '../../images/node-icon.png'; 
import jwt from '../../images/jwt.png'; 
import heroku from '../../images/heroku.png'; 
import bootstrap from '../../images/bootstrap-logo.png'; 
import phaser from '../../images/phaser.png'; 
import firebase from '../../images/firebase.png'; 
import firebasedb from '../../images/firebasedb.png'; 
import mysql from '../../images/mysql.png'; 
import jquery from '../../images/jquery.png'; 
import nodemailer from '../../images/nodemailer.png'; 
import nginx from '../../images/nginx.png'; 
import amazon from '../../images/amazon.png'; 
import pm2 from '../../images/pm2.png'; 
import express from '../../images/express.png'; 
import java from '../../images/java.png'; 
import android from '../../images/android.png'; 
import socketio from '../../images/socketio.png'; 
import xhtml from '../../images/xhtml.png'; 

const styles = theme => ({  
  chips: {
    margin: '12px 0px 0px 10px'
  }, 
});

class Projects extends Component {

  render() {

    const { classes } = this.props;

    
    return(
      <div className="Projects-container">
        {/* <p className="Projects-name"> Projects </p> */}
        <Project 
          title = "Joeco.me"
          image = {joecome}
          description = "A web application using react, node, express, and deployed with amazon ec2, nginx, and pm2"
          repoLink = "https://github.com/joecof/joeco.me"
          url = "https://www.joeco.me/"
          react = { <Chip avatar={<Avatar alt="react" src= {react} />} label="React" color="primary" className = {classes.chips}/>}
          materialui = {<Chip avatar={<Avatar alt="materialui" src= {materialui} />} label="Material UI" color="primary" className = {classes.chips}/>}
          node = {<Chip avatar={<Avatar alt="node" src= {node} />} label="Node js" color="secondary" className = {classes.chips}/>}
          nodemailer = {<Chip avatar={<Avatar alt="nodemailer" src= {nodemailer} />} label="Nodemailer" color="secondary" className = {classes.chips}/>}
          nginx = {<Chip avatar={<Avatar alt="NGINX" src= {nginx} />} label="NGINX" color="default" className = {classes.chips}/>}
          express = {<Chip avatar={<Avatar alt="Express" src= {express} />} label="Express js" color="secondary" className = {classes.chips}/>}
          amazon = {<Chip avatar={<Avatar alt="AmazonEC2" src= {amazon} />} label="Amazon EC2" color="default" className = {classes.chips}/>}
          pm2 = {<Chip avatar={<Avatar alt="pm2" src= {pm2} />} label="PM2" color="default" className = {classes.chips}/>}
        /> 
        <Project 
          title = "Tempify"
          image = {tempify}
          description = "A Vancouver based web application that connects temp workers with offices"
          repoLink = "https://github.com/joecof/Tempify"
          url = "https://tempify-v2.herokuapp.com/"
          react = { <Chip avatar={<Avatar alt="react" src= {react} />} label="React" color="primary" className = {classes.chips}/>}
          materialui = {<Chip avatar={<Avatar alt="materialui" src= {materialui} />} label="Material UI" color="primary" className = {classes.chips}/>}
          node = {<Chip avatar={<Avatar alt="node" src= {node} />} label="Node js" color="secondary" className = {classes.chips}/>}
          express = {<Chip avatar={<Avatar alt="Express" src= {express} />} label="Express js" color="secondary" className = {classes.chips}/>}
          jwt = {<Chip avatar={<Avatar alt="jwt" src= {jwt} />} label="JWT" color="secondary" className = {classes.chips}/>}
          heroku = {<Chip avatar={<Avatar alt="heroku" src= {heroku} />} label="Heroku" color="default" className = {classes.chips}/>}
          mysql = {<Chip avatar={<Avatar alt="mysql" src= {mysql} />} label="MySql" color="secondary" className = {classes.chips}/>}
        /> 
        <Project 
          title = "Operation Regen"
          image = {operationRegen}
          description = "A web-based game inspired by Nintendo's WarioWare, created with the Phaser game engine"
          repoLink = "https://github.com/joecof/Operation-Regen"
          url = "https://operation-regen.herokuapp.com/"
          react = { <Chip avatar={<Avatar alt="react" src= {react} />} label="React" color="primary" className = {classes.chips}/>}
          bootstrap = { <Chip avatar={<Avatar alt="bootstrap" src= {bootstrap} />} label="Bootstrap" color="primary" className = {classes.chips}/>}
          phaser = { <Chip avatar={<Avatar alt="phaser" src= {phaser} />} label="Phaser" color="primary" className = {classes.chips}/>}
          node = {<Chip avatar={<Avatar alt="node" src= {node} />} label="Node js" color="secondary" className = {classes.chips}/>}
          express = {<Chip avatar={<Avatar alt="Express" src= {express} />} label="Express js" color="secondary" className = {classes.chips}/>}
          mysql = {<Chip avatar={<Avatar alt="mysql" src= {mysql} />} label="MySql" color="secondary" className = {classes.chips}/>}
          heroku = {<Chip avatar={<Avatar alt="heroku" src= {heroku} />} label="Heroku" color="default" className = {classes.chips}/>}
        /> 
        <Project 
          title = "Coachable"
          image = {coachable}
          description = "A web application that connects students with coaches modeled after the Uber business model"
          repoLink = "https://github.com/joecof/Coachable.git"
          url = "https://coachable-2e83b.firebaseapp.com/"
          bootstrap = { <Chip avatar={<Avatar alt="bootstrap" src= {bootstrap} />} label="Bootstrap" color="primary" className = {classes.chips}/>}
          jquery = { <Chip avatar={<Avatar alt="jquery" src= {jquery} />} label="jQuery" color="primary" className = {classes.chips}/>}
          firebase = {<Chip avatar={<Avatar alt="firebasedb" src= {firebase} />} label="Firebase" color="default" className = {classes.chips}/>}
          firebasedb = {<Chip avatar={<Avatar alt="firebase" src= {firebasedb} />} label="Firebase DB" color="secondary" className = {classes.chips}/>}
        /> 
        <Project 
          title = "BookApp"
          image = {bookapp}
          description = "An android application that books recreational activities in the city of Surrey"
          repoLink = "https://github.com/joecof/BookApp.git"
          url = "/"
          xhtml = { <Chip avatar={<Avatar alt="XHTML" src= {xhtml} />} label="XHTML" color="primary" className = {classes.chips}/>}
          java = {<Chip avatar={<Avatar alt="Java" src= {java} />} label= "Java" color="secondary" className = {classes.chips}/>}
          android = {<Chip avatar={<Avatar alt="Android" src= {android} />} label= "Android Studio" color="default" className = {classes.chips}/>}
          firebase = {<Chip avatar={<Avatar alt="firebasedb" src= {firebase} />} label="Firebase" color="default" className = {classes.chips}/>}
          firebasedb = {<Chip avatar={<Avatar alt="firebase" src= {firebasedb} />} label="Firebase DB" color="secondary" className = {classes.chips}/>}
        /> 
        <Project 
          title = "ChatApp"
          image = {chatApp}
          description = "A web application using socket.io similar to the popularly known Slack messaging application"
          repoLink = "https://github.com/joecof/chat-app.git"
          url = "/"
          socketio = {<Chip avatar={<Avatar alt="SocketIO" src= {socketio} />} label= "Socket.io" color="secondary" className = {classes.chips}/>}
          node = {<Chip avatar={<Avatar alt="node" src= {node} />} label="Node js" color="secondary" className = {classes.chips}/>}
          express = {<Chip avatar={<Avatar alt="Express" src= {express} />} label="Express js" color="secondary" className = {classes.chips}/>}
          bootstrap = { <Chip avatar={<Avatar alt="bootstrap" src= {bootstrap} />} label="Bootstrap" color="primary" className = {classes.chips}/>}
        />     
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Projects);