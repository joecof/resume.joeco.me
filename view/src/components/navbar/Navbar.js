import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';

import github from '../../images/github-logo.png'; 
import linkedin from '../../images/linkedin.png'; 
import facebook from '../../images/facebook.png'; 
import gmail from '../../images/gmail.png'; 
import resume from '../../images/resume.png'; 


import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';


import './Navbar.css';

const styles = theme => ({  
  NavbarContainer: {
    backgroundColor: 'white',
    height: '150px',
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    display: 'block',
  }, 
  NavbarIcons: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'center',
  }, 
  NavBarTextContainer: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'center',
  }
});

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = ({
      sticky: false
    })

    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent() {

    const distanceY = window.pageYOffset;

    if (distanceY >= 50) {
      this.setState({
        sticky: true
      })
    } else {

      this.setState({
        sticky: false
      })
    }
  }

  render() {

    const { classes } = this.props;

    return(
      this.state.sticky ? 
      <div className = "Navbar-container"> 
        <AppBar className = {classes.NavbarContainer} position="fixed">
          <div className = {classes.NavbarIcons}> 
            <a href="https://github.com/joecof"><img className= "Navbar-github" src={github} alt="github" /></a>
            <a href="https://www.linkedin.com/feed/"><img className= "Navbar-linkedin" src={linkedin} alt="linkedin" /></a>
            <a > <img className = "Navbar-resume" src = {resume} alt="resume" onClick = {this.props.growEvent}/> </a>
            <a > <img className = "Navbar-gmail" src = {gmail} alt="gmail"/> </a>
            <a > <img className = "Navbar-facebook" src= {facebook} alt ="facebook"/> </a>
          </div>
          <Fade in={true}>
          <div className = {classes.NavBarTextContainer}>
            <Typography variant="h8" className={classes.title}>
              Joeco Fong  – joecofg@gmail.com  -  Full Stack Developer  -  <a href="https://github.com/joecof">https://github.com/joecof </a>
            </Typography>
          </div>
          </Fade>
        </AppBar> 
      </div>
        : 
        <div className = "Navbar-container"> 
        <AppBar className = {classes.NavbarContainer} position="fixed" elevation = {0}>
          <div className = {classes.NavbarIcons}> 
            <a href="https://github.com/joecof"><img className= "Navbar-github" src={github} alt="github" /></a>
            <a href="https://www.linkedin.com/feed/"><img className= "Navbar-linkedin" src={linkedin} alt="linkedin" /></a>
            <a > <img className = "Navbar-resume" src = {resume} alt="resume" onClick = {this.props.growEvent}/> </a>
            <a > <img className = "Navbar-gmail" src = {gmail} alt="gmail"/> </a>
            <a > <img className = "Navbar-facebook" src= {facebook} alt ="facebook"/> </a>
          </div>
          <Fade out={true}>
          <div className = {classes.NavBarTextContainer}>
            <Typography variant="h8" className={classes.title}>
              Joeco Fong – joecofg@gmail.com - Full Stack Developer - <a href="https://github.com/joecof">https://github.com/joecof </a>
            </Typography>
          </div>
          </Fade>
        </AppBar> 
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Navbar);