import React, {Component} from 'react';
import { NavLink, Link, Route, Switch, withRouter} from "react-router-dom";
import Resume from '../resume/Resume';
import './App.css';

class App extends Component {

  render() {
    return(
      <div className="App">
        <Resume/>
      </div>
    )
  }
}

export default withRouter(App);
