import React, { Component } from 'react'
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";
import { withStyles } from '@material-ui/core/styles';

import './ContactSection.css';

const styles = theme => ({  
  contactContainer: {
    width: "100%",
    height: "400px",
    display: "flex",
    alignItems: "center",
    marginTop: '75px'
  }
});

class ContactSection extends Component{

  constructor(props) {

    super(props);

  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <div className={classes.contactContainer}> */}

          {window.innerWidth < 650? 
            <div className={classes.contactContainer}>
              <SocialMedia />
            </div> :
            <div className={classes.contactContainer}>
              <SocialMedia />
              {/* <Contact /> */}
            </div>
          }
          
        {/* </div> */}
      </div>
    );
  }

}



export default withStyles(styles, { withTheme: true })(ContactSection);


