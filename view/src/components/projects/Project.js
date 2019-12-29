import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Project.css'

const styles = theme => ({  
  card: {
    maxWidth: 700,
    width: 700,
    display: 'inline-block',
    height:470,
    borderRadius: '0px',
  },
  media: {
    height: 380,
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
  }

  render() {
    const { classes } = this.props;

    return (
      <div className = "Project-container">
        <Card className={classes.card} elevation = {0} >
          <CardActionArea 
            target="_blank" 
            href={this.props.url} 
            rel="noopener noreferrer" 
            className= {classes.mediaContainer}
            className="img__wrap"
            >
              <div className="img__description_layer">
                <p className="img__description">Visit Project</p>
              </div>
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
          </CardActionArea>
          {/* <CardActions>
            <Button size="small" color="primary" target="_blank" href = {this.props.repoLink} rel="noopener noreferrer">
              Github
            </Button>
            <Button size="small" color="primary" target="_blank" href={this.props.url} rel="noopener noreferrer">
              Visit Project
            </Button>
          </CardActions> */}
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Project);