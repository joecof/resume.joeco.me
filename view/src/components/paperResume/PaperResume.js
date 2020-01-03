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
          d4 = "Heroku, Amazon EC2, Dockers, PM2, NGINX, Firebase, WildFly/JBoss, Maven"
        />
        <Typography variant="h6" className={classes.label}>
          EXPERIENCE
        </Typography>
        <div className = "Paper-projects">
          <PaperProject 
            title = "joeco.me "
            date = "December 2019 – January 2020"
            url = "https://www.joeco.me/"
            d1 = "Deployed with Amazon EC2, NGINX, and PM2"
            d2 = "SSL Certified using NGINX with Let's Encrypt"
            d3 = "Uses React.js with Material UI components to build frontend"
            d4 = "Uses Nodemailer to send emails out of React Component."
          />
          <PaperProject 
            title = "Tempify"
            date = "September – December 2019"
            url = "https://tempify-v2.herokuapp.com/"
            d1 = "Deployed with Heroku with MySQL ClearDB"
            d2 = "Uses React.js with Material UI components to build frontend"
            d3 = "Used Agile/Scrum methodologies framework to organize tasks and keep members accountable."
            d4 = "Presented the project to 20 peers regarding the application, process, and overall goal of the web application."
          />
          <PaperProject 
            title = "Operation Regen"
            date = "April – May 2019"
            url = "https://operation-regen.herokuapp.com/"
            d1 = "Object Orientated Programming (Java), Procedural Programming, Relational Database Methods &amp; Applications, Web Development, Discrete Mathematics, Business Communications"
            d2 = "Collaborated with a team of 3 using Git to track changes throughout the project life cycle."
            d3 = "Used Agile/Scrum methodologies framework to organize tasks and keep members accountable."
            d4 = "Presented the project to 20 peers regarding the application, process, and overall goal of the web application."
          />
          <PaperProject 
            title = "BookApp"
            date = "September – December 2019"
            url = "https://appetize.io/app/pwv2aknnphf9y6mep9xkzx8azw"
            d1 = "Object Orientated Programming (Java), Procedural Programming, Relational Database Methods &amp; Applications, Web Development, Discrete Mathematics, Business Communications"
            d2 = "Collaborated with a team of 3 using Git to track changes throughout the project life cycle."
            d3 = "Used Agile/Scrum methodologies framework to organize tasks and keep members accountable."
            d4 = "Presented the project to 20 peers regarding the application, process, and overall goal of the web application."
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
            title = "DIPLOMA – COMPUTER SYSTEM TECHNOLOGY BCIT"
            date = "2018 – Present"
            d1 = "Object Orientated Programming (Java), Procedural Programming, Relational Database Methods &amp; Applications, Web Development, Discrete Mathematics, Business Communications"
          />
          <PaperEducation
            title = "DEGREE – HEALTH SCIENCES SFU, BURNABY"
            date = "2010 – 2016"
            d1 = "Biostatistics, Health Informatics, Biology, Kinesiology, Epidemiology"
          />
        </div>
        <div>
          <Typography variant="h6" className={classes.label}>
            Projects
          </Typography>
          <Projects/>
        </div>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaperResume);