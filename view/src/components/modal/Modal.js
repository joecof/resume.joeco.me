import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import './Modal.css';

class Modal extends Component {

  constructor(props) {
    super(props);

    this.state = ({
      grow: this.props.grow
    })

  }

  componentDidMount() {
    this.setState({
      grow: this.props.grow,
    })
  }

  render() {
    return(
      <div className = "Modal-container">
        <Button className = "Modal-button" onClick = {this.props.growEvent}> 
          <span className = "Modal-text"> View Resume </span>
        </Button>

      </div>
    )
  }
}

export default Modal;