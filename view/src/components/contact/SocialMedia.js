import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import github from '../../images/github-logo.png'; 
import linkedin from '../../images/linkedin.png'; 
import gmail from '../../images/gmail.png'; 
import next from '../../images/next.png'; 

import resume from '../../images/resume.png'; 
import resumeText from '../../text/joeco-fong-resume.pdf'; 

const useStyles = makeStyles(theme => ({
  contactContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderTop: "1px solid lightgray",
  },
  emailUs: {
    width: "75%",
    fontSize: "27pt",
    fontWeight: "700",
    padding: '5px',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center'

    
  },
  emailUsMessage: {
    width: "75%",
    marginTop: "5px",
    marginBottom: "5px",
    lineHeight: "22px"
  },
  socialMedia: {
    width: "75%",

  },
  instagramLabel: {
    height: "50px",
    width: "50px",
    backgroundColor: "#84c3e7",
    marginRight: "10px",
    marginTop: "5px",
    borderRadius: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "15px",
    '&:hover': {
      backgroundColor: "#84c3e7",
      opacity: "0.9"
    }
  },
  twitterLabel: {
    height: "50px",
    width: "50px",
    backgroundColor: "#84dae7",
    marginRight: "10px",
    marginTop: "5px",
    borderRadius: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "15px",
    '&:hover': {
      backgroundColor: "#84dae7",
      opacity: "0.9"
    }
  },
  facebookLabel: {
    height: "50px",
    width: "50px",
    backgroundColor: "#75aae6",
    marginRight: "10px",
    marginTop: "5px",
    borderRadius: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "15px",
    '&:hover': {
      backgroundColor: "#75aae6",
      opacity: "0.9"
    }
  },
  socialMediaLogo: {
    width: '40px',
    padding: '15px'
  }, 
  gmailLogo: {
    paddingLeft: '10px',
    width: '50px',
    padding: '5px',
    verticleAlign:'middle'

  },
  nextLogo: {
    paddingLeft: '10px',
    width: '40px',
    padding: '5px',
    verticleAlign:'middle'


  },
}));

export default function() {
  const classes = useStyles();

  return (
    <div className={classes.contactContainer}>
      <div className={classes.emailUs}>
        Email Me
        <img className= {classes.nextLogo} src={next} alt="gmail" />
        <a href="mailto:joecofg@gmail.com.com" target="_top">
          <img className= "Navbar-gmail" src={gmail} alt="gmail" />
        </a> 
      </div>
      <div className={classes.emailUsMessage}>
        I would love to hear from you and work together on future projects! 
      </div>
    </div>
  );
}
