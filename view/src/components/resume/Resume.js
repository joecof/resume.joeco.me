import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import Modal from '../modal/Modal';
import PaperResume from '../paperResume/PaperResume';
import { Link, animateScroll as scroll } from "react-scroll";

import './Resume.css';

class Resume extends Component {

  constructor(props) {
    super(props);

    this.state = ({
      grow: false, 
      clicked: false,
    })

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      grow: false,
      clicked: false,
    })
  }

  handleClick = () => {
    this.setState({
      grow: !this.state.grow,
      clicked: !this.state.clicked,
    })
  }

  render() {
    return (
      <div className= "Resume-container">
        <Navbar
          growEvent = {this.handleClick}
          grow = {this.state.grow}
        />
        <PaperResume /> 
        {
          this.state.grow && this.state.clicked ?    
            (<Link to="null" onClick={() => scroll.scrollTo(0, {duration: 500})} > 
              <Modal 
                growEvent = {this.handleClick}
                grow = {this.state.grow}
              /> 
            </Link>)
            :
            null
        } 
      </div>
    )
  }
}

export default Resume;