import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
        <Typography variant="h6" className={classes.label} >
          SKILLS AND QUALIFICATIONS
        </Typography>
        <PaperSkills 
          title1 = "LANGUAGES"
          title2 = "FRONTEND FRAMEWORKS"
          title3 = "FRAMEWORKS/LIBRARIES"
          title4 = "DEVOPS/SYSADMIN"
          d1 = " C++, Java, JavaScript, C, MySQL, NoSQL, Mongoose"
          d2 = "React.js, Material UI, Bootstrap, PrimeFaces, JavaServer Faces"
          d3 = "Node.js, JWT.io, Express.js, Socket.io, Phaser.js, Java Persistence API"
          d4 = "Amazon EC2, Dockers, PM2, NGINX, Heroku, Firebase, WildFly/JBoss, Maven"
        />
        <Typography variant="h6" className={classes.label}>
          EXPERIENCE
        </Typography>
        <div className = "Paper-projects">
          <PaperProject 
            title = "joeco.me "
            date = "December 2019 – January 2020"
            url = "https://www.joeco.me/"
            d1 = "Configured and applied SSL Certification using NGINX with Let's Encrypt/CertBot to enable HTTPS for added security."
            d2 = "Deployed and configured joeco.me by using a linux Amazon EC2 instance that runs a NGINX reverse proxy to a node/express server, that is managed with PM2."
            d3 = "Developed with React.js and also leveraged Material UI components to further improve UI/UX."
            d4 = "Implemented Nodemailer to enable sending emails through the web application instead of through third-party applications."
          />
          <PaperProject 
            title = "Tempify"
            date = "September – December 2019"
            url = "https://tempify-v2.herokuapp.com/"
            d1 = "Implemented authentication with JSON web tokens to secure all API requests. "
            d2 = "Configured/deployed application through Heroku, and migrated database schema from a third-party MySQL provider to Heroku's MySQL ClearDB add-on."
            d3 = "Improved load speeds by +200% through migrating the project from Laravel/PHP to Node.js/React.js."
            d4 = "Implemented the MVC design pattern to be used throughout the project."
          />
          <PaperProject 
            title = "Operation Regen"
            date = "April – May 2019"
            url = "https://operation-regen.herokuapp.com/"
            d1 = "Developed a solution to implement the 2D game framework Phaser.js to be wrapped around React.js as an embedded WebGL canvas."
            d2 = "Implemented the MVC design pattern to be used throughout the project."
            d3 = "Started an open source bare-bones React-Phaser-Node-Express boilerplate to speed up development for future developers."
            d4 = "Established the MERN stack as the development environment, and presented it to a team of 4 to be used through out the project."
          />
          <PaperProject 
            title = "BookApp"
            date = "September – December 2019"
            url = "https://appetize.io/app/pwv2aknnphf9y6mep9xkzx8azw"
            d1 = "Implemented a denormalize database schema using NoSQL to significantly improve read performance."
            d2 = "Presented end-product to 5 key representatives of lower mainland BC."
            d3 = "Leveraged the data of the 6 most popular recreation centers in Surrey and used its data to provide a schedule for BookApp."
            d4 = "Developed the application in Android Studios using Java and XML"
          />
          <PaperProject 
            title = "Coachable"
            date = "September – December 2018"
            url = "https://coachable-2e83b.firebaseapp.com/"
            d1 = "Object Orientated Programming (Java), Procedural Programming, Relational Database Methods &amp; Applications, Web Development, Discrete Mathematics, Business Communications"
            d2 = "Collaborated with a team of 3 using Git to track changes throughout the project life cycle."
            d3 = "Used Agile/Scrum methodologies framework to organize tasks and keep members accountable."
            d4 = "Presented the project to 20 peers regarding the application, process, and overall goal of the web application."
          />
        </div>
        <Typography variant="h6" className={classes.label}>
          EDUCATION
        </Typography>
        <div className = "Paper-education">
          <PaperEducation
            title = "ASSOCIATE DEGREE – COMPUTER SYSTEM TECHNOLOGY BCIT"
            date = "2018 – Present"
          />
          <PaperEducation
            title = "DEGREE – HEALTH SCIENCES SFU, BURNABY"
            date = "2010 – 2016"
          />
        </div>
        <div>
          <Typography variant="h6" className={classes.label}>
            PROJECTS
          </Typography>
          <Projects/>
        </div>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaperResume);