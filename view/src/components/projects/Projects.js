import React, {Component} from 'react';
import Project from './Project';
import './Projects.css'

import tempify from '../../images/tempify.png';
import operationRegen from '../../images/operation-regen.png';
import coachable from '../../images/coachable.png';
import bookapp from '../../images/bookapp.png';
import chatApp from '../../images/chatapp.png';
import joecome from '../../images/joecome.png';


class Projects extends Component {

  render() {
    return(
      <div className="Projects-container">
        {/* <p className="Projects-name"> Projects </p> */}
        <Project 
          title = "Tempify"
          image = {tempify}
          description = "A Vancouver based web application that connect temp workers with offices"
          repoLink = "https://github.com/joecof/Tempify"
          url = "https://tempify-v2.herokuapp.com/"
        /> 
        <Project 
          title = "Operation Regen"
          image = {operationRegen}
          description = "A web-based game inspired by Nintendo's WarioWare"
          repoLink = "https://github.com/joecof/Operation-Regen"
          url = "https://operation-regen.herokuapp.com/"
        /> 
        <Project 
          title = "Coachable"
          image = {coachable}
          description = "A web application that connects students with coaches"
          repoLink = "https://github.com/joecof/Coachable.git"
          url = "https://coachable-2e83b.firebaseapp.com/"
        /> 
        <Project 
          title = "Joeco.me"
          image = {joecome}
          description = "A web application deployed with amazon ec2, nginx, and pm2"
          repoLink = "https://github.com/joecof/joeco.me"
          url = "https://www.joeco.me/"
        /> 
        <Project 
          title = "BookApp"
          image = {bookapp}
          description = "An android application that books for recreational activities in the city of Surrey"
          repoLink = "https://github.com/joecof/BookApp.git"
          url = "/"
        /> 
        <Project 
          title = "ChatApp"
          image = {chatApp}
          description = "A web application using socket.io to imitate the popular slack message application"
          repoLink = "https://github.com/joecof/chat-app.git"
          url = "/"
        />     
      </div>
    )
  }
}

export default Projects;