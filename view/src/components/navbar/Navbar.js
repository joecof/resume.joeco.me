import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import github from '../../images/github-logo.png'; 
import linkedin from '../../images/linkedin.png'; 
import gmail from '../../images/gmail.png'; 
import resume from '../../images/resume.png'; 
import resumeText from '../../text/joeco-fong-resume.pdf'; 
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
            <a href={resumeText} download> <img className = "Navbar-resume" src = {resume} alt="resume"/> </a>
            <a href="mailto:joecofg@gmail.com.com" target="_top"> <img className = "Navbar-gmail" src = {gmail} alt="gmail"/> </a>
          </div>
          <Fade in={true}>
          <div className = {classes.NavBarTextContainer}>
            <p variant="h8" className="Navbar-title">
              Joeco Fong  – joecofg@gmail.com  -  Full Stack Developer  -  <a href="https://github.com/joecof">https://github.com/joecof </a>
            </p>
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
            <a href={resumeText} download> <img className = "Navbar-resume" src = {resume} alt="resume"/> </a>
            <a href="mailto:joecofg@gmail.com.com?Subject=Resume%20Inquiry&amp;body=Hi%20Joeco%20!%0A%0AHow%20are%20you%20?" target="_top"> <img className = "Navbar-gmail" src = {gmail} alt="gmail"/> </a>
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