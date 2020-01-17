import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import close from '../../images/close.png'; 
import PaperProject from './PaperProject'
import PaperEducation from './PaperEducation'
import PaperSkills from './PaperSkills'
import PaperContact from './PaperContact'
import Projects from '../projects/Projects';


import './PaperResume.css';

const styles = theme => ({  
  paper: {
    margin: theme.spacing(1),
  },
  nameTitle: {
    fontWeight: 'bold',
    fontSize: '37pt',
    letterSpacing: '2px',
  },
  title: {
    color: 'black',
    display: 'block',
    fontSize: '12pt',
    letterSpacing: '2px',
  }, 
  label: {
    color: 'black',
    display: 'block',
    backgroundColor: '#E0E0E0',
    marginBottom: '10px',
    fontWeight: 'bold',
    fontSize: '14pt',
    letterSpacing: '2px',
  }, 
  education: {
    textAlign: 'left',
    fontSize: '12pt',
    letterSpacing: '2px',
  }, 
  projects: {
    textAlign: 'left',
    fontSize: '12pt',
    letterSpacing: '2px',
  }, 
  experience: {
    textAlign: 'left',
    fontSize: '12pt',
    letterSpacing: '2px',
  }, 
  date: {
    float:'right',
    fontSize: '12pt',
  }
});

class PaperResume extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div className = "Paper-container">
        <img className = "Paper-close" src= {close} alt ="close" onClick = {this.props.growEvent} />
        <PaperContact
          title = "JOECO FONG"
          contact = "(778) 883 6220 – joecofg@gmail.com "
          url = "https://github.com/joecof"
        />
        <p className = "Paper-label">
          SKILLS AND QUALIFICATIONS
        </p>
        <PaperSkills 
          title1 = "FRAMEWORKS/LIBRARIES"
          title2 = "LANGUAGES"
          title3 = "FRONTEND FRAMEWORKS"
          title4 = "DEVOPS/SYSADMIN"
          d1 = "Node, JWT.io, Express.js, Socket.io, Phaser.js, Java Persistence API"
          d2 = "C++, Java, JavaScript, C, MySQL, NoSQL, Mongoose"
          d3 = "React, Material UI, Bootstrap, PrimeFaces, JavaServer Faces"
          d4 = "Amazon EC2, Dockers, PM2, NGINX, Heroku, Firebase, WildFly/JBoss, Maven"
        />
        <p className = "Paper-label">
          EXPERIENCE
        </p>
        <div className = "Paper-projects">
          <PaperProject 
            title = "joeco.me "
            date = "December 2019 – January 2020"
            url = "https://www.joeco.me/"
            d1 = "Deployed using an AWS EC2 Linux instance that runs a NGINX reverse proxy to a PM2 managed express server."
            d2 = "Developed using React with Material UI components."
            d3 = "Configured SSL Certification using NGINX with Let's Encrypt/CertBot to enable HTTPS."
            d4 = "Implemented Nodemailer to allow for clients to securely deliver emails through the application." 
          />
          <PaperProject 
            title = "Tempify"
            date = "September – December 2019"
            url = "https://tempify-v2.herokuapp.com/"
            d1 = "Implemented authentication with signed JWT tokens to secure API requests."
            d2 = "Refactoring codebase from Laravel 5.5 to Node/React and increased load speeds by +200%. "
            d3 = "Deployed application through Heroku, and completed a database migration from Remote MySQL to Heroku's MySQL ClearDB add-on."
            d4 = "Implemented MySQL queries to select specific archived data across multiple tables, and used Material UI components to render the data to users."
          />
          <PaperProject 
            title = "Operation Regen"
            date = "April – May 2019"
            url = "https://operation-regen.herokuapp.com/"
            d1 = "Developed a solution to implement the 2D game engine Phaser.js to be wrapped around React as an embedded WebGL canvas."
            d2 = "Established the MERN stack with an MVC design pattern by bootstrapping Create-React-App to a node express server serving as a backend RESTful service."
            d3 = "Created an open source bare-bones React-Phaser-Node-Express boilerplate to speed up development for future developers."
            d4 = "Configured a solution that allowed for Heroku to deploy a React client application proxying an Express server while maintaining reliable connection to a MySQL DB."
          />
          <PaperProject 
            title = "BookApp"
            date = "September – December 2019"
            url = "https://appetize.io/app/pwv2aknnphf9y6mep9xkzx8azw"
            d1 = "Developed a flexible database solution to limit 15 users per available activity for any given day of the week for 6 of the most popular recreation centers in Surrey."
            d2 = "Developed the mobile application in Android Studios using Java, XML, Firebase Real-Time DB."
            d3 = "Implemented a denormalize database schema using NoSQL to significantly improve read performance."
            d4 = "Leveraged the city of Surrey's API dataset to develop a schedule and activities list for clients to sign up with."
          />
          <PaperProject 
            title = "Coachable"
            date = "September – December 2018"
            url = "https://coachable-2e83b.firebaseapp.com/"
            d1 = "Developed a weekly payment form with JQuery, JavaScript, and NoSQL to shows payment totals on a weekly basis for coaches and students."
            d2 = "Worked in a team of 3 under the Scrum, Agile development methodologies for 4 months."
            d3 = "Deployed the application on Firebase, using NoSQL for the database."
            d4 = "Used CSS Bootstrap to build frontend."
          />
        </div>
        <p className= "Paper-label">
          EDUCATION
        </p>
        <div className = "Paper-education">
          <PaperEducation
            title = "ASSOCIATE DEGREE – COMPUTER SYSTEM TECHNOLOGY BCIT, BURNABY"
            date = "2018 – Present"
          />
          <PaperEducation
            title = "DEGREE – HEALTH SCIENCES SFU, BURNABY"
            date = "2016"
          />
        </div>
        <div>
          <p className="Paper-label">
            PROJECTS
          </p>
          <Projects/>
        </div>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaperResume);