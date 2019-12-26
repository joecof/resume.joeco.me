import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Project.css'

const styles = theme => ({  
  card: {
    maxWidth: 405,
    display: 'inline-block',
    margin: '10px'
  },
  media: {
    height: 180,
  },
});

class Project extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className = "Project-container">
        <Card className={classes.card}>
          <CardActionArea target="_blank" href={this.props.url} rel="noopener noreferrer">
            <CardMedia
              className={classes.media}
              image= {this.props.image}
              title= {this.props.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" target="_blank" href = {this.props.repoLink} rel="noopener noreferrer" >
              Github
            </Button>
            <Button size="small" color="primary" target="_blank" href={this.props.url} rel="noopener noreferrer">
              Visit Project
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Project);