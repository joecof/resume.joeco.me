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
        <PaperContact
          title = "JOE FONG"
          contact = "(778) 883 6220 – joecofg@gmail.com "
          url = "https://github.com/joecof"
        />
        <p className = "Paper-label">
          PROFESSIONAL EXPERIENCE
        </p>
        <PaperProject 
            title = "SOFTWARE DEVELOPER"
            date = "Sept 2019 – Present"
            skills = "Node JS, Express, React, Material UI, SendGrid, BrainTree, JWT, MySQL, Wordpress, AWS EC2, Heroku"
            desc = "Tempify – A connected marketplace application for dental temping"
            d1 = "Architected a Node JS design and implemented it by migrating application from Laravel 5.5 to Node JS. Significantly increased HTTP response times as a result of implementation."
            d2 = "Developed a script in Node JS to compatibly migrate all legacy customer data to most current MySQL database."
            d3 = "Redesigned and implemented a dashboard UI using React JS and Material UI with industry standard UX."
            d4 = "Developed a robust API using SendGrid for boosting customer acquisition and conversions." 
          />
          <PaperProject 
            title = "SOFTWARE DEVELOPER"
            date = "July – 2020"
            skills = "Linux, Kubernetes, Dockers, AWS, Node JS, React, SEO, CI/CD, WordPress, Contract Management"
            desc = "HigherStack Software – A web and mobile development agency"
            d1 = "Communicated strategic goals and negotiated contracts for win-win transactions with clients"
            d2 = "Developed and implemented a robust CI/CD pipeline for software development."
            d3 = "Analyze user requirements and provide technical solutions to different business challenges."
            d4 = "Engaged in client meetings to discuss UI/UX direction" 
          />
        <p className = "Paper-label">
          PROJECTS
        </p>
        <div className = "Paper-projects">
          <PaperProject 
            title = "SOFTWARE DEVELOPER / SYSTEM ADMINISTRATOR"
            date = "December – January 2020"
            skills = "Linux, Kubernetes, Java, Wildfly, MySQL, Node JS, Express, React, Material UI, JWT"
            desc = "Timely – A project management and time tracking application"
            d1 = "Deployed, maintained, and automated containerized applications on OpenShift, specifically for Node JS, Wildfly, MySQL."
            d2 = "Designed, architected, and implemented a scalable, UX focused responsive front-end design using React with Material UI components."
            d3 = "Implemented a secure and scalable authentication middleware in Java using JWT that follows industry standards."
            d4 = "Architected the project infrastructure with a React front-end and a Java back-end."
          />
          <PaperProject 
            title = "SOFTWARE DEVELOPER / SYSTEM ADMINISTRATOR"
            date = "April – May 2019"
            skills = "Node JS, Express, React, Phaser JS, MySQL, HTML, CSS, Heroku"
            desc = "Operation Regen – A 2D web-based game inspired by old school classic Mario games."
            d1 = "Implemented authentication with signed JWT tokens to secure API requests."
            d2 = "Refactored codebase from Laravel 5.5 to Node/React increased load speeds by +200%. "
            d3 = "Deployed application through Heroku, and completed a database migration from Remote MySQL to Heroku's MySQL ClearDB add-on."
            d4 = "Implemented MySQL queries to select specific archived data across multiple tables, and used Material UI components to render the data to users."
          />
        </div>
        <p className= "Paper-label">
          EDUCATION
        </p>
        <div className = "Paper-education">
          <PaperEducation
            title = "DIPLOMA (WITH DISTINCTION) – COMPUTER SYSTEMS TECHNOLOGY BCIT, BURNABY"
            date = "2020"
          />
          <PaperEducation
            title = "DEGREE – HEALTH SCIENCES SFU, BURNABY"
            date = "2016"
          />
        </div>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaperResume);