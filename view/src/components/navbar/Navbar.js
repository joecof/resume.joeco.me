import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import github from '../../images/github-logo.png'; 
import linkedin from '../../images/linkedin.png'; 
import gmail from '../../images/gmail.png'; 
import resume from '../../images/resume.png'; 
import resumeText from '../../text/joeco-fong-resume.pdf'; 
import AppBar from '@material-ui/core/AppBar';

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
      <div className = "Navbar-container"> 
        <AppBar className = {classes.NavbarContainer} position="absolute" elevation = {0}>
          <div className = {classes.NavbarIcons}> 
            <a href="https://github.com/joecof"><img className= "Navbar-github" src={github} alt="github" /></a>
            <a href="https://www.linkedin.com/in/joeco-fong-0bb3aa128/" target="_blank"><img className= "Navbar-linkedin" src={linkedin} alt="linkedin" /></a>
            <a href={resumeText} download> <img className = "Navbar-resume" src = {resume} alt="resume"/> </a>
            <a href="mailto:joecofg@gmail.com.com" target="_top"> <img className = "Navbar-gmail" src = {gmail} alt="gmail"/> </a>
          </div>
        </AppBar> 
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Navbar);