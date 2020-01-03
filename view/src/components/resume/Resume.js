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
        {
          this.state.grow ?  
            <Grow in = {true}>
              <div>
              <Header/>
              </div> 
            </Grow>   
           : 
            <PaperResume 
              growEvent = {this.handleClick}
            />     
        }
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

        {
          this.state.grow ? 
            <Link to="null" onClick={() => scroll.scrollTo(850)} > <DownArrow/></Link>
            :
            null
        }

        {
          this.state.grow ? 
            <Projects/>
            :
            null
        }
      </div>
    )
  }
}

export default Resume;