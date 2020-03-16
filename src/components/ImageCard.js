import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const axios = require('axios');



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 340,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  const [data, setdata] = useState(null);
  const url = "https://api.imgflip.com/get_memes"

  axios.get(url)
    .then(data => {
      const endPoint = data.data.data;
      console.log(endPoint)
      setdata(endPoint)
    })

  return (
    <div className="ImageCard">
      { data && data.memes.map((memes) => (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            key= {memes.id}
            className={classes.media}
            image={memes.url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {memes.name}
          </Typography>

          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
      </Card>
        ))}
    </div>
  );
}
