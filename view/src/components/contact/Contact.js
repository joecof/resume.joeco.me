import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import './Contact.css';

const useStyles = makeStyles(theme => ({
  container: {
    margin: "0 auto",
    padding: '30px',
    borderTop: "1px solid lightgray",
    width: "1000px",
    marginTop: "100px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    backgroundColor: "rgba(144, 144, 144, 0.075)",
    borderColor: "#dbdbdb"
  },

  nameEmailContainer: {
    display: "flex",
    justifyContent: "center"
  },
  messageContaienr: {
    display: "flex",
    justifyContent: "center"
  },
  contactName: {
    width: "38%",
    margin: "2%",
    backgroundColor: "rgba(144, 144, 144, 0.075)"
  },
  contactEmail: {
    width: "38%",
    margin: "2%",
    backgroundColor: "rgba(144, 144, 144, 0.075)"
  },
  contactMessage: {
    width: "80%",
    marginTop: "5px",
    backgroundColor: "rgba(144, 144, 144, 0.075)"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  buttonContainer: {
    marginTop: "8px",
    marginLeft: "10%"
  },
  button: {
    backgroundColor: "white",
    border: "1px solid lightgray",
    boxShadow: "none",
    padding: "10px 20px",
    borderRadius: "0",
    "&:hover": {
      backgroundColor: "rgba(144, 144, 144, 0.075)",
      boxShadow: "none"
    }
  },
  title: {
    textAlign: 'center',
    fontSize: '22pt'
  }
}));

export default function Contact() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    cuName: "",
    cuEmail: "",
    cuMessage: "",
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <p className = {classes.title}>Send Me an Email</p>
      <div className={classes.nameEmailContainer}>
        <TextField
          id="outlined-name"
          className={classes.contactName}
          margin="normal"
          placeholder="Your Name"
          variant="outlined"
          value={values.cuName}
          onChange={handleChange('cuName')}
        />
        <TextField
          id="standard-name"
          className={classes.contactEmail}
          margin="normal"
          placeholder="E-mail Address"
          variant="outlined"
          value={values.cuEmail}
          onChange={handleChange('cuEmail')}
        />
      </div>
      <div className={classes.messageContaienr}>
        <TextField
          multiline={true}
          rows="5"
          id="standard-name"
          className={classes.contactMessage}
          margin="normal"
          placeholder="Send me an email"
          variant="outlined"
          value={values.cuMessage}
          onChange={handleChange('cuMessage')}
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button variant="contained" className={classes.button}>
          Send Message
        </Button>
      </div>
    </form>
  );
}