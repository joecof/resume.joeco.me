import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import DownArrow from '../downArrow/DownArrow';
import Skills from '../skills/Skills';

import { Link, animateScroll as scroll } from "react-scroll";


import './Resume.css';


class Resume extends Component {

  render() {
    return (
      <div className= "Resume-container">
        <Navbar/>
        <Header/>
        <Link onClick={() => scroll.scrollTo(1000)} > <DownArrow/></Link>
        <Skills/>
      </div>
    )
  }
}

export default Resume;