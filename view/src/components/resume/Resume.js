import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import DownArrow from '../downArrow/DownArrow';
import Projects from '../projects/Projects';
import Modal from '../modal/Modal';
import PaperResume from '../paperResume/PaperResume';

import { Link, animateScroll as scroll } from "react-scroll";
import Grow from '@material-ui/core/Grow';

import './Resume.css';

class Resume extends Component {

  constructor(props) {
    super(props);

    this.state = ({
      grow: false, 
      header: false
    })

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      grow: false,
      header: false
    })
  }

  handleClick = () => {
    this.setState({
      grow: !this.state.grow,
      header: !this.state.header
    })

    console.log(this.state.grow);
  }

  render() {
    return (
      <div className= "Resume-container">
        <Navbar
          growEvent = {this.handleClick}
          grow = {this.state.grow}
        />
        {
          this.state.grow ?     
            <Grow in = {this.state.grow}>
              <div>
                <PaperResume 
                  growEvent = {this.handleClick}
                />
              </div>
            </Grow>
           : 
            <Header/>
        }
        {
          this.state.grow ?    
            null
            :
            <Modal 
              growEvent = {this.handleClick}
              grow = {this.state.grow}
            /> 
        } 
        <Link to="null" onClick={() => scroll.scrollTo(880)} > <DownArrow/></Link>
        <Projects/>
      </div>
    )
  }
}

export default Resume;