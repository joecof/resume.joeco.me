import React from "react";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  contactContainer: {
    width: "100%",
    height: "400px",
    display: "flex",
    alignItems: "center",
    marginTop: '100px'
  }
}));

export default function() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.contactContainer}>
        <SocialMedia />
        <Contact />
      </div>
    </div>
  );
}
