import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ProfileCard from "../ProfileCard/ProfileCard";

const styles = {
  card: {
    margin: 50,
    display: "grid",
    alignItems: "flex-end",
    alignContent: "flex-end",
    height: "495px"
  },
  media: {
    height: 381,
    width: 800,
    display: "grid",
    alignItems: "flex-start",
    alignContent: "flex-start"
  }
};

function MapCard(props) {
  const { classes } = props;
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between"
      }}
    >
      <Card className={classes.card} style={{ justifycontent: "center" }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          {/* <CardContent>
            <Typography gutterBottom variant="display2" component="h2">
              Map Goes Here
            </Typography>
          </CardContent> */}
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          {/* <Button size="small" color="primary" justify="center">
          Learn More
        </Button> */}
        </CardActions>
      </Card>

      <ProfileCard />
    </div>
  );
}

MapCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MapCard);
