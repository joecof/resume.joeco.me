import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  outerContainer: {
    width: "100%",
    height: "45px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "1px solid lightgray",
    fontSize: '0.8em'

  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  footerContainers: {
    marginLeft: "10px",
    marginRight: "10px",
    textDecoration: "none", 
  },
  copyrightMessage: {
    color: "gray"
  }
}));

export default function() {
  const classes = useStyles();
  return (
    <div className={classes.outerContainer}>
      <div className={classes.copyrightMessage}>
        © Joeco Fong - Full Stack Developer - All rights reserved. @2020.
      </div>
    </div>
  );
}
