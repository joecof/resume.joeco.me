import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/fade';

import Skills from '../skills/Skills';

import './Project.css'

const styles = theme => ({  
  card: {
    maxWidth: 445,
    width: 445,
    display: 'inline-block',
    height: 400,
    borderRadius: '10px',
    margin: '10px'
  },
  media: {
    height: 290,
  },
  text: {
    fontFamily: 'Montserrat',
    fontStyle:'sans-serif'
  },
  mediaContainer: {
    "&:hover": {
      transition: '.5s ease',
      backfaceVisibility: 'hidden',
      opacity: 1.2
    }, 
  }
});

class Project extends Component {

  constructor(props) {
    super(props); 

    this.state = ({
      skills: false
    })

    this.flipCardSkills = this.flipCardSkills.bind(this);
    this.flipCardProject = this.flipCardProject.bind(this);

  }

  flipCardSkills() {
    this.setState({
      skills: true
    })
  }

  flipCardProject() {
    this.setState({
      skills: false
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className = "Project-container">
        <Card className={classes.card} elevation = {2} >
          <CardActionArea 
            className= {classes.mediaContainer}
            // className="img__wrap"
            onMouseEnter = {this.flipCardSkills}
            onMouseLeave = {this.flipCardProject}
            >
            {!this.state.skills ?
              <div className="img__description_layer">
                <p className="img__description">Learn More</p>
              </div>
              : 
              null
           }
            {!this.state.skills ?
              (
              <div>  
              <CardMedia
                className={classes.media}
                image= {this.props.image}
                title= {this.props.title}
              />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className = {classes.text}>
                    {this.props.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className = {classes.text}>
                    {this.props.description}
                  </Typography>
                </CardContent>
              </div>
              ): 
              <Fade in = {true} timeout = {400}>
                <div>
                  <Skills 
                    title = {this.props.title}
                    description = {this.props.description}
                    url = {this.props.url}
                    repoLink = {this.props.repoLink}
                    react = {this.props.react}
                    bootstrap = {this.props.bootstrap}
                    phaser = {this.props.phaser}
                    jquery = {this.props.jquery}
                    materialui = {this.props.materialui}
                    node = {this.props.node}
                    express = {this.props.express}
                    jwt = {this.props.jwt}
                    heroku = {this.props.heroku}
                    mysql = {this.props.mysql}
                    firebase = {this.props.firebase}
                    firebasedb = {this.props.firebasedb}
                    nodemailer = {this.props.nodemailer}
                    nginx = {this.props.nginx}
                    amazon = {this.props.amazon}
                    pm2 = {this.props.pm2}
                    java = {this.props.java}
                    android = {this.props.android}
                    socketio = {this.props.socketio}
                    xhtml = {this.props.xhtml}
                  /> 
                </div>
              </Fade>
            }
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Project);