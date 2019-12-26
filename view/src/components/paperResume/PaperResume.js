import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import close from '../../images/close.png'; 

import './PaperResume.css';

const styles = theme => ({  
  paper: {
    margin: theme.spacing(1),
  },
  title: {
    color: 'black',
    display: 'block',
  }, 
  label: {
    color: 'black',
    display: 'block',
    backgroundColor: '#E0E0E0',
    marginBottom: '10px'
  }, 
  education: {
    textAlign: 'left'
  }, 
  projects: {
    textAlign: 'left'
  }, 
  experience: {
    textAlign: 'left'
  }, 
  date: {
    float:'right'
  }
});

class PaperResume extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div className = "Paper-container">
        <img className = "Paper-close" src= {close} alt ="close" onClick = {this.props.growEvent} />
        <div className = "Paper-Header">
          <Typography variant="h4" className={classes.title} >
            JOECO FONG
          </Typography>
          <Typography variant="h8" className={classes.title}>
            (778) 883 6220 – joecofg@gmail.com 
          </Typography>           
          <Typography variant="h8" className={classes.title}>
            <a href="https://github.com/joecof">https://github.com/joecof </a>
          </Typography>
        </div>
        <Typography variant="h6" className={classes.label}>
          SKILLS AND QUALIFICATIONS
        </Typography>
        <div className = "Paper-skills">
          <ul>
            <li>
              Java, HTML5, CSS3, JavaScript, jQuery, JSON, AJAX, SQL, Git, Node.js, Bash command-line, C
            </li>
            <li>
              Built several responsive web applications using multiple programming languages and technologies.            
            </li>
            <li>
              Tested different programs manually and in JUnit.
            </li>
            <li>
              Client-focused communicator through group projects and work experience
            </li>
          </ul>
        </div>
        <Typography variant="h6" className={classes.label}>
          EDUCATION
        </Typography>
        <div className = "Paper-education">
          <Typography variant="h6" className={classes.education}>
            DIPLOMA – COMPUTER SYSTEM TECHNOLOGY BCIT, <span className = {classes.date}> BURNABY 2018 – Present </span>
          </Typography>
          <ul>
            <li>
              Object Orientated Programming (Java), Procedural Programming, Relational Database Methods 
              & Applications, Web Development, Discrete Mathematics, Business Communications            
            </li>
          </ul>
          <Typography variant="h6" className={classes.education}>
            BACHELOR OF ARTS – HEALTH SCIENCS SFU, BURNABY <span className = {classes.date}> 2010 – 2016 </span>
          </Typography>
          <ul>
            <li>
              Biostatistics, Health Informatics, Biology, Kinesiology, Epidemiology 
            </li>
          </ul>
        </div>
        
        <Typography variant="h6" className={classes.label}>
          PROJECT
        </Typography>
      <div className = "Paper-projects">
        <Typography variant="h6" className={classes.projects}>
          COACHABLE  	<span className = {classes.date}> September – December 2018 </span>   
        </Typography>
        <Typography variant="h8" className={classes.projects}>
          https://coachable-2e83b.firebaseapp.com/	               
        </Typography>
          <ul>
            <li>
              Object Orientated Programming (Java), Procedural Programming, Relational Database Methods 
              & Applications, Web Development, Discrete Mathematics, Business Communications            
            </li>
            <li>
              Collaborated with a team of 3 using Git to track changes throughout the project life cycle.
            </li>
            <li>
              Used Agile/Scrum methodologies framework to organize tasks and keep members accountable.
            </li>
            <li>
              Presented the project to 20 peers regarding the application, process, and overall goal of the web application. 
            </li>
          </ul>
          <Typography variant="h6" className={classes.title}>
            TIC TAC TOE	 <span className= {classes.date}> August 2018 </span>     
          </Typography>
          <Typography variant="h8" className={classes.title}>
            https://github.com/joecof/TicTacToe	                            
          </Typography>
          <ul>
            <li>
              Developed a tic tac toe game using HTML5, CSS3, JavaScript, and jQuery as a self-learning exercise.         
            </li>
          </ul>       
        </div>
        <Typography variant="h6" className={classes.label}>
          PROFESSIONAL EXPERIENCE
        </Typography>
       <div className = "Paper-experience">
         <Typography variant="h6" className={classes.experience}>
           INTACT INSURANCE	<span className = {classes.date}> November 2016 to December 2017 </span>     
         </Typography>
         <Typography variant="h8" className={classes.experience}>
           Claims Adjuster  <span className = {classes.date}> Vancouver, BC </span>         
         </Typography>
         <ul>
           <li>
            Handled 300+ customer files while providing elite customer service to each client.
           </li>
           <li>
             Negotiated claim settlements of +$100,000, ranging from auto, property, to bodily injury.                    
           </li>
         </ul>
        <Typography variant="h6" className={classes.experience}>
          POSABILITIES  <span className = {classes.date}> June 2016 to April 2018 </span>      
        </Typography>
        <Typography variant="h8" className={classes.experience}>
          Donation Service Representative	<span className = {classes.date}> Burnaby, BC	</span>      
        </Typography>
        <ul>
          <li>
            Contributed to +75% increase in donations for the Clothing Donation Program. 
          </li>
        </ul>
       </div>
        <Typography variant="h5" className={classes.label}>
          HOBBIES & INTERESTS          
        </Typography>
        <div className="Paper-hobbies">
          <ul>
            <li>
              Coached children and high school students in basketball.
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaperResume);