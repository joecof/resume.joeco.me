import React, {Component} from 'react';
import Project from './Project';
import './Projects.css'

import tempify from '../../images/tempify.png';
import operationRegen from '../../images/operation-regen.png';
import coachable from '../../images/coachable.png';
import bookapp from '../../images/bookapp.png';
import chatApp from '../../images/chatapp.png';


class Projects extends Component {

  render() {
    return(
      <div className="Projects-container">
        <p className="Projects-name"> Projects </p>
        <Project 
          title = "Tempify"
          image = {tempify}
          description = "A web application to connect temps with offices."
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
          title = "BookApp"
          image = {bookapp}
          description = "An android application that books for recreational activities"
          repoLink = "https://github.com/joecof/BookApp.git"
          url = "/"
        /> 
        <Project 
          title = "Chat-app"
          image = {chatApp}
          description = "A web application using socket.io to imitate slack"
          repoLink = "https://github.com/joecof/chat-app.git"
          url = "/"
        /> 

        
      </div>
    )
  }
}

export default Projects;