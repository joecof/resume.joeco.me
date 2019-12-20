import React, {Component} from 'react';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';

import DownArrow from '../downArrow/DownArrow';
import { Link, animateScroll as scroll } from "react-scroll";


import './Resume.css';


class Resume extends Component {

  render() {
    return (
      <div className= "Resume-container">
        <Navbar/>
        <Header/>
          <Link onClick={() => scroll.scrollTo(1000)} > <DownArrow/></Link>
      </div>
    )
  }
}

export default Resume;