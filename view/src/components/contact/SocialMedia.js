import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import github from '../../images/github-logo.png'; 
import linkedin from '../../images/linkedin.png'; 
import gmail from '../../images/gmail.png'; 

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
    fontSize: "25pt",
    fontWeight: "700"
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
    width: '40px',
  },
}));

export default function() {
  const classes = useStyles();

  return (
    <div className={classes.contactContainer}>
      <div className={classes.emailUs}>Email Me</div>
      <div className={classes.emailUsMessage}>
        I would love to hear from you and work together on future projects! 
        Reach out and I'll respond as soon as I can. 
        <a href="mailto:joecofg@gmail.com.com" target="_top">
          <img className= {classes.gmailLogo} src={gmail} alt="gmail" />
        </a>
      </div>
      <div className={classes.socialMedia}>
        {/* <a href="https://github.com/joecof">
          <img className = {classes.socialMediaLogo} src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/feed/">
          <img className= {classes.socialMediaLogo} src={linkedin} alt="linkedin" />
        </a>
        <a href={resumeText} download>
          <img className = {classes.socialMediaLogo} src = {resume} alt="resume"/>        
        </a> */}
        
        {/* <span className = {classes.sendMeText}>  Send me an email !  ---> </span> */}
        {/* <a href="mailto:joecofg@gmail.com.com" target="_top">
          <img className= {classes.gmailLogo} src={gmail} alt="gmail" />
        </a> */}
      </div>
    </div>
  );
}
