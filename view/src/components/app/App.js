import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import Resume from '../resume/Resume';
import ContactSection from '../contact/ContactSection';
import Footer from '../footer/Footer';

import resumeText from '../../text/joeco-fong-resume.pdf'; 
import floppy from '../../images/floppy-disk.png'; 
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props); 

    this.state = ({
      download: true,
      closed: false,
      screenWidth: null
    })

    this.listenScrollEvent = this.listenScrollEvent.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
    window.addEventListener("resize", this.updateWindowDimensions());

    this.setState({
      download: false, 
      closed: false
    })
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth });
 }

  listenScrollEvent() {
    const distanceY = window.pageYOffset;

    if (distanceY >= 150) {
      this.setState({
        download: true,
      })
    } else if (distanceY <= 150) {
      this.setState({
        download: false,
        closed: false
      })
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      download: false,
      closed: true
    })
  };


  render() {
    return(
      <div className="App">
        <Resume/>
        <ContactSection/>
        {
          this.state.closed ?
            null
            :
              <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={this.state.download}
                className="App-snackbar"
                onClose={this.handleClose}
                message={<a className = "App-pdf" href={resumeText} download><span className="message-id"> <img className = "App-download" src= {floppy} alt ="download"/> SAVE MY RESUME </span></a>}
                action={[
                <IconButton
                  key="close"
                  aria-label="close"
                  color="inherit"
                  onClick={this.handleClose}
                >
                  <CloseIcon />
                </IconButton>,
              ]}
              />
        }
        <Footer/>
      </div>
    )
  }
}

export default withRouter(App);
