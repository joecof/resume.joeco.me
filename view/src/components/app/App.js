import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import Resume from '../resume/Resume';
import Contact from '../contact/Contact';

import icon from '../../images/icon.png'; 
import download from '../../images/download.png'; 


import Snackbar from '@material-ui/core/Snackbar';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props); 

    this.state = ({
      download: true
    })

    this.listenScrollEvent = this.listenScrollEvent.bind(this);

  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);

    this.setState({
      download: false
    })
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);

  }

  listenScrollEvent() {

    const distanceY = window.pageYOffset;

    if (distanceY >= 150) {
      this.setState({
        download: true
      })
    } else {
      this.setState({
        download: false
      })
    }
  }

  handleClose() {

  }

  render() {
    return(
      <div className="App">
        <Resume/>
        <Contact/>
        <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={this.state.download}
        message={<span className="message-id"> <img className = "App-download" src= {download} alt ="download"/> Download My Resume </span>}
      />
      </div>
    )
  }
}

export default withRouter(App);
