import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";

const styles = {
  card: {
    marginRight: 20,
    height: 500,
    width: 350,
    marginTop: 30,

    display: "grid"
    // justifycontent: "space-between",
  },
  media: {
    height: 200,
    marginRight: 0
    // display: "flex",
    // justify: "center"
    // alignContent: "flex-end",
    // alignContent: "flex-end"
  },
  image: {}
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.image}>
            <Image src="https://images.pexels.com/photos/1144173/pexels-photo-1144173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="display1" component="h6">
              UserName
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              blanditiis incidunt quas inventore vel obcaecati itaque autem a
              saepe repellendus esse ullam, unde quam, porro soluta quod libero
              voluptatum magnam.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ display: "grid", alignItems: "center" }}>
          <Button size="small" color="primary">
            Share
          </Button>
          {/* <Button size="small" color="primary" justify="center">
          Learn More
        </Button> */}
        </CardActions>
      </Card>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
